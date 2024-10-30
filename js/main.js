document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const price = parseFloat(document.getElementById('price').value);
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const stock = parseInt(document.getElementById('stock').value);
    const imageFile = document.getElementById('image').files[0];

    // Upload da imagem para o Firebase Storage
    const storageRef = storage.ref('products/' + imageFile.name);
    const uploadTask = storageRef.put(imageFile);

    uploadTask.on('state_changed',
        function (snapshot) { },
        function (error) {
            console.error('Erro no upload da imagem:', error);
        },
        function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                // Adicionar o produto no Firestore
                db.collection('products').add({
                    title,
                    price,
                    description,
                    category,
                    stock,
                    imageUrl: downloadURL
                }).then(() => {
                    alert('Produto adicionado com sucesso!');
                }).catch(error => {
                    console.error('Erro ao adicionar o produto:', error);
                });
            });
        }
    );
});

function fetchProducts() {
    db.collection('products').get().then((querySnapshot) => {
        const productList = document.getElementById('productList');
        productList.innerHTML = ''; // Limpar lista antes de preencher

        querySnapshot.forEach((doc) => {
            const product = doc.data();
            const productItem = `
          <div>
            <img src="${product.imageUrl}" alt="${product.title}" style="width: 100px;">
            <h3>${product.title}</h3>
            <p>Preço: R$${product.price}</p>
            <p>${product.description}</p>
            <p>Categoria: ${product.category}</p>
            <p>Estoque: ${product.stock}</p>
            <button onclick="removeStock('${doc.id}')">Remover do estoque</button>
            <button onclick="deleteProduct('${doc.id}')">Excluir produto</button>
          </div>
        `;
            productList.innerHTML += productItem;
        });
    });
}

// Remover do estoque
function removeStock(productId) {
    const productRef = db.collection('products').doc(productId);

    productRef.get().then((doc) => {
        if (doc.exists) {
            const newStock = doc.data().stock - 1;
            productRef.update({ stock: newStock }).then(() => {
                alert('Produto removido do estoque!');
                fetchProducts(); // Atualizar lista
            });
        }
    });
}

// Excluir produto
function deleteProduct(productId) {
    db.collection('products').doc(productId).delete().then(() => {
        alert('Produto excluído!');
        fetchProducts(); // Atualizar lista
    });
}

// Carregar os produtos ao abrir o site
window.onload = fetchProducts;  