$(document).ready(function() {  

    function limparCarrinho() {  
        carrinho = []; // Limpa o array do carrinho  
        total = 0; // Reinicia o total  

        // Atualiza a lista de compras e o valor total na interface  
        atualizarListaCompras();  
    }  

    // Manipulador para o botão cancelar  
    $(document).on('click', '.btn_cancelar_compra_caixa', function() {  
        if (confirm("Você tem certeza que deseja cancelar o pedido?")) {  
            limparCarrinho();  
        }  
    }); 

    
   

    let carrinho = [];  
    let total = 0;  

    function renderProdutos() {  
        produtos.forEach(produto => {  
            $('#produtos-container').append(`  
                <div class="especificacao_produtos" data-id="${produto.id}" data-preco="${produto.preco}">  
                    <div class="imagem_produto_caixa"><img src="${produto.img}" alt="${produto.nome}"></div>  
                    <div class="descr_nome_e_valor">  
                        <p class="nome_produto_caixa">${produto.nome}</p>  
                        <p class="valor_produto_caixa">R$${produto.preco.toFixed(2)}</p>  
                        <button class="btn_adicionar" type="button">Adicionar</button>  
                    </div>  
                </div>  
            `);  
        });  
    }  

    function atualizarListaCompras() {  
        $('#comprados-list-container').empty();  
        carrinho.forEach(item => {  
            $('#comprados-list-container').append(`  
                <div class="produto_comprado">  
                    <div class="quantidade_e_produto">  
                        <p class="numero_itens_no_pedido">${item.quantidade}x</p>  
                        <p class="nome_item_comprado">${item.nome}</p>  
                    </div>  
                    <div class="preco_produto_caixa">  
                        <p class="preco_especificado">R$${(item.preco * item.quantidade).toFixed(2)}</p>  
                    </div>  
                </div>  
            `);  
        });  
        $('.preco_total_pedido_caixa').text(`R$${total.toFixed(2)}`);  
    }  

    $(document).on('click', '.btn_adicionar', function() {  
        let produto = $(this).closest('.especificacao_produtos');  
        let id = produto.data('id');  
        let nome = produto.find('.nome_produto_caixa').text();  
        let preco = produto.data('preco');  

        let item = carrinho.find(i => i.id === id);  
        if (item) {  
            item.quantidade++;  
        } else {  
            carrinho.push({ id: id, nome: nome, preco: preco, quantidade: 1 });  
        }  
        total += preco;  
        atualizarListaCompras();  
    });  

    // Contador de Itens  
    let contador = 0;  

    $('#btn_contador_diminuir_item').click(function() {  
        if (contador > 0) {  
            contador--;  
            $('.numero_de_itens_no_contador').text(contador);  
        }  
    });  

    $('#btn_contador_aumentar_item').click(function() {  
        contador++;  
        $('.numero_de_itens_no_contador').text(contador);  
    });  

    renderProdutos();  
});

$(document).ready(function() {  
    const produtos = [  
        { id: 1, nome: "Coxinha", preco: 3.50, img: "path_to_image", categoria: "salgados" },  
        { id: 2, nome: "Risoles", preco: 4.50, img: "path_to_image", categoria: "salgados" },  
        { id: 3, nome: "Coca Cola", preco: 3.00, img: "path_to_image", categoria: "bebidas" },  
        { id: 4, nome: "Suco de Laranja", preco: 5.00, img: "path_to_image", categoria: "bebidas" },  
        // Adicione mais produtos conforme necessário  
    ];  

    function renderProdutos(categoria = "todos") {  
        $('#produtos-container').empty();
        const produtosFiltrados = categoria === "todos" ? produtos : produtos.filter(produto => produto.categoria === categoria);  

        produtosFiltrados.forEach(produto => {  
            $('#produtos-container').append(`  
                <div class="especificacao_produtos" data-id="${produto.id}" data-preco="${produto.preco}">  
                    <div class="imagem_produto_caixa"><img src="${produto.img}" alt="${produto.nome}" style="width:100%;"></div>  
                    <div class="descr_nome_e_valor">  
                        <p class="nome_produto_caixa">${produto.nome}</p>  
                        <p class="valor_produto_caixa">R$${produto.preco.toFixed(2)}</p>  
                        <button class="btn_adicionar" type="button">Adicionar</button>  
                    </div>  
                </div>  
            `);  
        });  
    }  

    // Evento de clique no filtro  
    $(document).on('click', '.btn_filtro', function() {  
        $('.btn_filtro').removeClass('active');  
        $(this).addClass('active');
        const categoriaSelecionada = $(this).data('categoria');  
        renderProdutos(categoriaSelecionada); 
    });  


    renderProdutos();  
});

