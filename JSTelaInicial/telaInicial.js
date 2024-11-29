        // Seleciona todos os botões "Concluir"
        const btnConcluir = document.querySelectorAll('.btn_concluir_pedidos');

        // Função para mover o pedido para a seção de "Pedidos Concluídos"
        btnConcluir.forEach(btn => {
            btn.addEventListener('click', function() {
                // Localiza o pedido clicado
                const pedido = this.closest('.lista_pedidos_a_fazer'); // Encontra a div do pedido
                
                // Seleciona a seção de pedidos concluídos
                const pedidosConcluidos = document.querySelector('.pedidos_concluidos .lista_pedidos_concluidos');

                // Move o pedido para a lista de pedidos concluídos
                pedidosConcluidos.appendChild(pedido);

                // Atualiza o botão para mostrar "Finalizado"
                this.textContent = 'Finalizado';
                this.disabled = true; // Desabilita o botão após conclusão

                // Define um tempo para mover o pedido para o histórico (exemplo: 5 segundos)
                setTimeout(() => {
                    // Seleciona a seção de histórico de pedidos
                    const historicoPedidos = document.querySelector('.historico .lista_pedidos_historico');
                    
                    // Move o pedido para o histórico
                    historicoPedidos.appendChild(pedido);

                    // Opcional: se quiser remover o botão "Finalizado" após mover para o histórico
                    const btnFinalizado = pedido.querySelector('.btn_concluir_pedidos');
                    btnFinalizado.style.display = 'none';
                }, 5000); // Muda para o histórico após 5 segundos (você pode ajustar esse tempo)
            });
        });

        // Popup de Expansão
        const openPopupButton = document.querySelectorAll('.pop_up_expandir');
        const closePopupButton = document.querySelectorAll('.pop_up_fechar');

        openPopupButton.forEach(button => {
            button.addEventListener('click', () => {
                const popup = button.closest('.lista_pedidos_a_fazer').querySelector('.popup');
                popup.style.display = 'flex';
                document.body.classList.add('no-scroll');
            });
        });

        closePopupButton.forEach(button => {
            button.addEventListener('click', () => {
                const popup = button.closest('.popup');
                popup.style.display = 'none';
                document.body.classList.remove('no-scroll');
            });
        });
