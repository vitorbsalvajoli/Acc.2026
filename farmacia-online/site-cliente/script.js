// Banco de dados de produtos da farmácia
const produtos = [
    // Analgésicos
    {
        id: 1,
        nome: "Dipirona 500mg",
        categoria: "analgésicos",
        descricao: "Analgésico e antitérmico. Alivia dores e reduz febre.",
        laboratorio: "Genérico",
        preco: 4.99,
        precoAntigo: null,
        emoji: "💊",
        badge: null,
        estoque: 150
    },
    {
        id: 2,
        nome: "Paracetamol 750mg",
        categoria: "analgésicos",
        descricao: "Analgésico e antitérmico eficaz para dores leves a moderadas.",
        laboratorio: "Neo Química",
        preco: 8.49,
        precoAntigo: 10.99,
        emoji: "💊",
        badge: "oferta",
        estoque: 200
    },
    {
        id: 3,
        nome: "Ibuprofeno 400mg",
        categoria: "analgésicos",
        descricao: "Anti-inflamatório, analgésico e antitérmico.",
        laboratorio: "Eurofarma",
        preco: 12.90,
        precoAntigo: null,
        emoji: "💊",
        badge: null,
        estoque: 120
    },
    {
        id: 4,
        nome: "Dorflex 36 Comprimidos",
        categoria: "analgésicos",
        descricao: "Relaxante muscular com ação analgésica.",
        laboratorio: "Sanofi",
        preco: 19.90,
        precoAntigo: 24.90,
        emoji: "💊",
        badge: "oferta",
        estoque: 80
    },
    {
        id: 5,
        nome: "Novalgina 500mg",
        categoria: "analgésicos",
        descricao: "Analgésico potente para dores intensas.",
        laboratorio: "Sanofi",
        preco: 15.50,
        precoAntigo: null,
        emoji: "💊",
        badge: null,
        estoque: 90
    },

    // Antibióticos
    {
        id: 6,
        nome: "Amoxicilina 500mg",
        categoria: "antibióticos",
        descricao: "Antibiótico de amplo espectro. Venda sob prescrição.",
        laboratorio: "Genérico",
        preco: 18.90,
        precoAntigo: null,
        emoji: "💊",
        badge: null,
        estoque: 60,
        requerReceita: true
    },
    {
        id: 7,
        nome: "Azitromicina 500mg",
        categoria: "antibióticos",
        descricao: "Antibiótico para infecções bacterianas. Venda sob prescrição.",
        laboratorio: "Pfizer",
        preco: 35.90,
        precoAntigo: 42.90,
        emoji: "💊",
        badge: "oferta",
        estoque: 45,
        requerReceita: true
    },
    {
        id: 8,
        nome: "Cefalexina 500mg",
        categoria: "antibióticos",
        descricao: "Antibiótico para diversas infecções. Venda sob prescrição.",
        laboratorio: "Medley",
        preco: 22.50,
        precoAntigo: null,
        emoji: "💊",
        badge: null,
        estoque: 55,
        requerReceita: true
    },

    // Vitaminas e Suplementos
    {
        id: 9,
        nome: "Vitamina C 1g",
        categoria: "vitaminas",
        descricao: "Suplemento de vitamina C para imunidade. Sabor laranja.",
        laboratorio: "Cemil",
        preco: 12.90,
        precoAntigo: null,
        emoji: "🍊",
        badge: null,
        estoque: 180
    },
    {
        id: 10,
        nome: "Complexo B",
        categoria: "vitaminas",
        descricao: "Vitaminas B1, B6 e B12 para energia e disposição.",
        laboratorio: "Phonoex",
        preco: 16.50,
        precoAntigo: 21.90,
        emoji: "💪",
        badge: "oferta",
        estoque: 100
    },
    {
        id: 11,
        nome: "Vitamina D3 7000UI",
        categoria: "vitaminas",
        descricao: "Vitamina D para saúde dos ossos e imunidade.",
        laboratorio: "Vitafor",
        preco: 29.90,
        precoAntigo: null,
        emoji: "☀️",
        badge: "novo",
        estoque: 75
    },
    {
        id: 12,
        nome: "Ômega 3 1000mg",
        categoria: "vitaminas",
        descricao: "Óleo de peixe rico em ômega 3 para saúde cardiovascular.",
        laboratorio: "Ocean Drop",
        preco: 49.90,
        precoAntigo: 69.90,
        emoji: "🐟",
        badge: "oferta",
        estoque: 65
    },
    {
        id: 13,
        nome: "Magnésio Quelado 200mg",
        categoria: "vitaminas",
        descricao: "Magnésio de alta absorção para saúde muscular e óssea.",
        laboratorio: "Essential Nutrition",
        preco: 59.90,
        precoAntigo: null,
        emoji: "⚡",
        badge: "novo",
        estoque: 50
    },
    {
        id: 14,
        nome: "Zinco 30mg",
        categoria: "vitaminas",
        descricao: "Mineral essencial para imunidade e saúde celular.",
        laboratorio: "Now Foods",
        preco: 34.90,
        precoAntigo: null,
        emoji: "🛡️",
        badge: null,
        estoque: 85
    },

    // Cuidados Pessoais
    {
        id: 15,
        nome: "Protetor Solar FPS 50",
        categoria: "cuidados-pessoais",
        descricao: "Proteção alta contra raios UVA/UVB. Toque seco.",
        laboratorio: "La Roche-Posay",
        preco: 79.90,
        precoAntigo: 99.90,
        emoji: "🧴",
        badge: "oferta",
        estoque: 40
    },
    {
        id: 16,
        nome: "Shampoo Anticaspa",
        categoria: "cuidados-pessoais",
        descricao: "Combate a caspa e alivia a coceira no couro cabeludo.",
        laboratorio: "Head & Shoulders",
        preco: 18.90,
        precoAntigo: null,
        emoji: "🧴",
        badge: null,
        estoque: 120
    },
    {
        id: 17,
        nome: "Creme Hidratante Facial",
        categoria: "cuidados-pessoais",
        descricao: "Hidratação intensa para pele seca. Não oleoso.",
        laboratorio: "Neutrogena",
        preco: 32.90,
        precoAntigo: null,
        emoji: "🧴",
        badge: null,
        estoque: 70
    },
    {
        id: 18,
        nome: "Álcool em Gel 70%",
        categoria: "cuidados-pessoais",
        descricao: "Higienização das mãos. Fragrância suave. 500ml.",
        laboratorio: "Rioquímica",
        preco: 9.90,
        precoAntigo: 14.90,
        emoji: "🧼",
        badge: "oferta",
        estoque: 200
    },
    {
        id: 19,
        nome: "Pasta de Dente Whitening",
        categoria: "cuidados-pessoais",
        descricao: "Clareamento dental com proteção contra cáries.",
        laboratorio: "Colgate",
        preco: 11.90,
        precoAntigo: null,
        emoji: "🦷",
        badge: null,
        estoque: 150
    },

    // Infantil
    {
        id: 20,
        nome: "Dipirona Infantil 500mg/ml",
        categoria: "infantil",
        descricao: "Analgésico e antitérmico infantil. Sabor uva. 20ml.",
        laboratorio: "Sanofi",
        preco: 8.90,
        precoAntigo: null,
        emoji: "👶",
        badge: null,
        estoque: 100
    },
    {
        id: 21,
        nome: "Vitamina Infantil A-Z",
        categoria: "infantil",
        descricao: "Multivitamínico para crianças. Sabor delicioso. 150ml.",
        laboratorio: "Bayer",
        preco: 28.90,
        precoAntigo: 35.90,
        emoji: "🧒",
        badge: "oferta",
        estoque: 60
    },
    {
        id: 22,
        nome: "Fralda Pampers G",
        categoria: "infantil",
        descricao: "Fraldas descartáveis tamanho G. Pacote com 36 unidades.",
        laboratorio: "P&G",
        preco: 54.90,
        precoAntigo: 64.90,
        emoji: "👶",
        badge: "oferta",
        estoque: 80
    },
    {
        id: 23,
        nome: "Lenços Umedecidos",
        categoria: "infantil",
        descricao: "Lenços suaves para bebê. Pacote com 80 unidades.",
        laboratorio: "Johnson's",
        preco: 12.90,
        precoAntigo: null,
        emoji: "🧻",
        badge: null,
        estoque: 130
    },

    // Uso Crônico
    {
        id: 24,
        nome: "Losartana 50mg",
        categoria: "cronico",
        descricao: "Anti-hipertensivo. Venda sob prescrição médica.",
        laboratorio: "Genérico",
        preco: 12.90,
        precoAntigo: null,
        emoji: "💊",
        badge: null,
        estoque: 200,
        requerReceita: true
    },
    {
        id: 25,
        nome: "Metformina 850mg",
        categoria: "cronico",
        descricao: "Antidiabético oral. Venda sob prescrição médica.",
        laboratorio: "Genérico",
        preco: 8.90,
        precoAntigo: null,
        emoji: "💊",
        badge: null,
        estoque: 250,
        requerReceita: true
    },
    {
        id: 26,
        nome: "Omeprazol 20mg",
        categoria: "cronico",
        descricao: "Protetor gástrico. Para gastrite e refluxo.",
        laboratorio: "Genérico",
        preco: 9.90,
        precoAntigo: 14.90,
        emoji: "💊",
        badge: "oferta",
        estoque: 180,
        requerReceita: true
    },
    {
        id: 27,
        nome: "Sinvastatina 20mg",
        categoria: "cronico",
        descricao: "Redutor de colesterol. Venda sob prescrição médica.",
        laboratorio: "Genérico",
        preco: 14.90,
        precoAntigo: null,
        emoji: "💊",
        badge: null,
        estoque: 160,
        requerReceita: true
    },
    {
        id: 28,
        nome: "Levotiroxina 50mcg",
        categoria: "cronico",
        descricao: "Hormônio tireoidiano. Venda sob prescrição médica.",
        laboratorio: "Abbott",
        preco: 24.90,
        precoAntigo: null,
        emoji: "💊",
        badge: null,
        estoque: 100,
        requerReceita: true
    },

    // Mais produtos diversos
    {
        id: 29,
        nome: "Máscara de Proteção KN95",
        categoria: "cuidados-pessoais",
        descricao: "Máscara de alta filtragem. Pacote com 10 unidades.",
        laboratorio: "3M",
        preco: 29.90,
        precoAntigo: 39.90,
        emoji: "😷",
        badge: "oferta",
        estoque: 90
    },
    {
        id: 30,
        nome: "Termômetro Digital",
        categoria: "cuidados-pessoais",
        descricao: "Medição rápida e precisa da temperatura corporal.",
        laboratorio: "G-Tech",
        preco: 24.90,
        precoAntigo: null,
        emoji: "🌡️",
        badge: null,
        estoque: 45
    }
];

// Carrinho de compras
let carrinho = [];
let categoriaAtual = 'todos';

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinho();
    renderizarProdutos();
    atualizarContadorCarrinho();
    verificarUsuarioLogado();
    
    // Adicionar evento de busca ao pressionar Enter
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscarProduto();
        }
    });
});

// Verificar usuário logado
function verificarUsuarioLogado() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogadoFarmacia'));
    const btnUsuario = document.getElementById('btn-usuario');
    
    if (usuarioLogado) {
        btnUsuario.innerHTML = `👤 ${usuarioLogado.nome.split(' ')[0]}`;
        btnUsuario.style.background = 'var(--accent-color)';
    } else {
        btnUsuario.innerHTML = '👤 Entrar';
        btnUsuario.style.background = 'var(--primary-color)';
    }
}

// Gerenciar conta (login/logout)
function gerenciarConta() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogadoFarmacia'));
    
    if (usuarioLogado) {
        if (confirm(`Deseja sair da conta de ${usuarioLogado.nome}?`)) {
            localStorage.removeItem('usuarioLogadoFarmacia');
            verificarUsuarioLogado();
            mostrarToast('Você saiu da sua conta.');
        }
    } else {
        window.location.href = 'auth.html';
    }
}

// Renderizar produtos na grade
function renderizarProdutos(filtro = null) {
    const grid = document.getElementById('products-grid');
    let produtosFiltrados = produtos;

    if (filtro) {
        produtosFiltrados = produtos.filter(p => 
            p.nome.toLowerCase().includes(filtro.toLowerCase()) ||
            p.descricao.toLowerCase().includes(filtro.toLowerCase()) ||
            p.laboratorio.toLowerCase().includes(filtro.toLowerCase())
        );
    } else if (categoriaAtual !== 'todos') {
        produtosFiltrados = produtos.filter(p => p.categoria === categoriaAtual);
    }

    if (produtosFiltrados.length === 0) {
        grid.innerHTML = `
            <div class="no-products">
                <h3>😕 Nenhum produto encontrado</h3>
                <p>Tente buscar por outro termo ou selecione outra categoria.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = produtosFiltrados.map(produto => `
        <div class="product-card" data-id="${produto.id}">
            ${produto.badge ? `<span class="product-badge ${produto.badge}">${produto.badge === 'oferta' ? 'OFERTA' : 'NOVO'}</span>` : ''}
            <div class="product-image">${produto.emoji}</div>
            <div class="product-info">
                <span class="product-category">${formatarCategoria(produto.categoria)}</span>
                <h3 class="product-name">${produto.nome}</h3>
                <p class="product-description">${produto.descricao}</p>
                <p class="product-laboratory">🏭 ${produto.laboratorio}</p>
                ${produto.requerReceita ? '<p style="color: #dc3545; font-size: 0.8rem; margin-bottom: 8px;">⚠️ Requer receita médica</p>' : ''}
                <div class="product-price-container">
                    ${produto.precoAntigo ? `<span class="product-price-old">R$ ${produto.precoAntigo.toFixed(2).replace('.', ',')}</span>` : ''}
                    <span class="product-price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                </div>
                <p class="product-price-installments">ou 3x de R$ ${(produto.preco / 3).toFixed(2).replace('.', ',')} sem juros</p>
                <button class="btn-add-cart" onclick="adicionarAoCarrinho(${produto.id})" id="btn-${produto.id}">
                    🛒 Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join('');
}

// Formatar nome da categoria
function formatarCategoria(categoria) {
    const categorias = {
        'analgésicos': 'Analgésicos',
        'antibióticos': 'Antibióticos',
        'vitaminas': 'Vitaminas',
        'cuidados-pessoais': 'Cuidados Pessoais',
        'infantil': 'Infantil',
        'cronico': 'Uso Crônico'
    };
    return categorias[categoria] || categoria;
}

// Filtrar por categoria
function filtrarCategoria(categoria) {
    categoriaAtual = categoria;
    
    // Atualizar classe active na navegação
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(categoria)) {
            link.classList.add('active');
        }
    });

    renderizarProdutos();
}

// Buscar produto
function buscarProduto() {
    const termo = document.getElementById('search-input').value.trim();
    if (termo) {
        categoriaAtual = 'todos';
        document.querySelectorAll('.nav-list a').forEach(link => link.classList.remove('active'));
        renderizarProdutos(termo);
    } else {
        renderizarProdutos();
    }
}

// Adicionar ao carrinho
function adicionarAoCarrinho(idProduto) {
    const produto = produtos.find(p => p.id === idProduto);
    if (!produto) return;

    // Verificar se requer receita
    if (produto.requerReceita) {
        if (!confirm('Este medicamento requer receita médica. Deseja continuar?')) {
            return;
        }
    }

    const itemExistente = carrinho.find(item => item.id === idProduto);
    
    if (itemExistente) {
        if (itemExistente.quantidade < produto.estoque) {
            itemExistente.quantidade++;
        } else {
            mostrarToast('Quantidade máxima em estoque atingida!', 'error');
            return;
        }
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            emoji: produto.emoji,
            quantidade: 1,
            requerReceita: produto.requerReceita || false
        });
    }

    salvarCarrinho();
    atualizarContadorCarrinho();
    atualizarBotaoAdicionado(idProduto);
    mostrarToast(`${produto.nome} adicionado ao carrinho!`);
    
    // Se o carrinho estiver aberto, atualizar
    if (document.getElementById('cart-modal').classList.contains('active')) {
        renderizarCarrinho();
    }
}

// Atualizar visual do botão após adicionar
function atualizarBotaoAdicionado(idProduto) {
    const btn = document.getElementById(`btn-${idProduto}`);
    if (btn) {
        btn.classList.add('added');
        btn.innerHTML = '✓ Adicionado';
        
        setTimeout(() => {
            btn.classList.remove('added');
            btn.innerHTML = '🛒 Adicionar ao Carrinho';
        }, 2000);
    }
}

// Remover do carrinho
function removerDoCarrinho(idProduto) {
    carrinho = carrinho.filter(item => item.id !== idProduto);
    salvarCarrinho();
    atualizarContadorCarrinho();
    renderizarCarrinho();
    mostrarToast('Item removido do carrinho.');
}

// Alterar quantidade
function alterarQuantidade(idProduto, delta) {
    const item = carrinho.find(item => item.id === idProduto);
    if (!item) return;

    const produto = produtos.find(p => p.id === idProduto);
    const novaQuantidade = item.quantidade + delta;

    if (novaQuantidade <= 0) {
        removerDoCarrinho(idProduto);
        return;
    }

    if (produto && novaQuantidade > produto.estoque) {
        mostrarToast('Quantidade máxima em estoque atingida!', 'error');
        return;
    }

    item.quantidade = novaQuantidade;
    salvarCarrinho();
    renderizarCarrinho();
}

// Renderizar carrinho
function renderizarCarrinho() {
    const cartItems = document.getElementById('cart-items');
    
    if (carrinho.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio 😕</p>';
        document.getElementById('cart-total').textContent = 'R$ 0,00';
        return;
    }

    let total = 0;
    
    cartItems.innerHTML = carrinho.map(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        
        return `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.nome}</p>
                    <p class="cart-item-price">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="alterarQuantidade(${item.id}, -1)">−</button>
                        <span class="quantity-value">${item.quantidade}</span>
                        <button class="quantity-btn" onclick="alterarQuantidade(${item.id}, 1)">+</button>
                        <button class="remove-item-btn" onclick="removerDoCarrinho(${item.id})">🗑️ Remover</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('cart-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Atualizar contador do carrinho
function atualizarContadorCarrinho() {
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    document.getElementById('cart-count').textContent = totalItens;
}

// Toggle carrinho
function toggleCarrinho() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('active');
    
    if (modal.classList.contains('active')) {
        renderizarCarrinho();
    }
}

// Limpar carrinho
function limparCarrinho() {
    if (carrinho.length === 0) return;
    
    if (confirm('Deseja realmente limpar todo o carrinho?')) {
        carrinho = [];
        salvarCarrinho();
        atualizarContadorCarrinho();
        renderizarCarrinho();
        mostrarToast('Carrinho limpo!');
    }
}

// Finalizar compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        mostrarToast('Seu carrinho está vazio!', 'error');
        return;
    }

    // Verificar se loja está aberta
    const lojaAberta = localStorage.getItem('lojaAbertaFarmacia');
    if (lojaAberta === 'false') {
        mostrarToast('⛔ A loja está fechada no momento. Tente novamente mais tarde.', 'error');
        return;
    }

    // Verificar se usuário está logado
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogadoFarmacia'));
    if (!usuarioLogado) {
        mostrarToast('Por favor, faça login para finalizar a compra.', 'error');
        // Aguardar um momento e redirecionar para login
        setTimeout(() => {
            window.location.href = 'auth.html';
        }, 1500);
        return;
    }

    toggleCarrinho();
    
    // Preencher resumo do pedido
    const checkoutItems = document.getElementById('checkout-items');
    let total = 0;
    
    checkoutItems.innerHTML = carrinho.map(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        
        return `
            <div class="checkout-summary-item">
                <span>${item.emoji} ${item.nome} x${item.quantidade}</span>
                <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
            </div>
        `;
    }).join('');

    // Salvar total original para cálculo do desconto PIX
    const totalFormatado = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('checkout-total-value').textContent = totalFormatado;
    document.getElementById('checkout-total-value').dataset.totalOriginal = totalFormatado;
    
    // Resetar estado do desconto PIX
    document.getElementById('desconto-pix').style.display = 'none';
    document.getElementById('checkout-total-label').textContent = 'Total:';
    document.getElementById('pagamento').value = '';
    
    // Preencher dados do usuário logado automaticamente
    preencherDadosUsuario();
    
    document.getElementById('checkout-modal').classList.add('active');
}

// Preencher dados do usuário logado
function preencherDadosUsuario() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogadoFarmacia'));
    
    if (usuarioLogado) {
        // Buscar dados completos do usuário
        const usuarios = JSON.parse(localStorage.getItem('usuariosFarmacia') || '[]');
        const usuario = usuarios.find(u => u.email === usuarioLogado.email);
        
        if (usuario) {
            document.getElementById('nome').value = usuario.nome || '';
            document.getElementById('telefone').value = usuario.telefone || '';
            document.getElementById('cpf').value = usuario.cpf || '';
            document.getElementById('cep').value = usuario.cep || '';
            document.getElementById('endereco').value = usuario.endereco || '';
            document.getElementById('complemento').value = usuario.complemento || '';
            document.getElementById('cidade').value = usuario.cidade || '';
            document.getElementById('estado').value = usuario.estado || '';
            
            mostrarToast('Dados preenchidos automaticamente!');
        }
    }
}

// Fechar checkout
function fecharCheckout() {
    document.getElementById('checkout-modal').classList.remove('active');
}

// Confirmar pedido
function confirmarPedido(event) {
    event.preventDefault();
    
    // Validar pagamento em dinheiro
    const pagamento = document.getElementById('pagamento');
    let valorTroco = null;
    if (pagamento.value === 'dinheiro') {
        valorTroco = document.getElementById('valor-troco').value.trim();
        if (!valorTroco) {
            mostrarToast('Por favor, informe o valor para troco!', 'error');
            return;
        }
    }
    
    // Gerar número do pedido
    const numeroPedido = 'PED' + Date.now().toString().slice(-8);
    document.getElementById('order-number').textContent = numeroPedido;
    
    // Calcular total
    let total = 0;
    const totalText = document.getElementById('checkout-total-value').textContent;
    total = parseFloat(totalText.replace('R$ ', '').replace(',', '.'));
    
    // Criar objeto do pedido
    const novoPedido = {
        id: numeroPedido,
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        cpf: document.getElementById('cpf').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        complemento: document.getElementById('complemento').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        pagamento: pagamento.value,
        valorTroco: valorTroco,
        itens: carrinho.map(item => ({
            id: item.id,
            nome: item.nome,
            emoji: item.emoji,
            quantidade: item.quantidade,
            preco: item.preco
        })),
        total: totalText,
        status: 'pendente',
        dataPedido: new Date().toISOString(),
        dataAtualizacao: new Date().toISOString()
    };
    
    // Salvar pedido no localStorage
    salvarPedido(novoPedido);
    
    // Fechar checkout e mostrar confirmação
    fecharCheckout();
    document.getElementById('confirmation-modal').classList.add('active');
    
    // Limpar carrinho
    carrinho = [];
    salvarCarrinho();
    atualizarContadorCarrinho();
    
    // Limpar formulário
    document.getElementById('checkout-form').reset();
}

// Salvar pedido no localStorage
function salvarPedido(pedido) {
    const pedidosSalvos = localStorage.getItem('pedidosFarmacia');
    let pedidos = [];
    
    if (pedidosSalvos) {
        pedidos = JSON.parse(pedidosSalvos);
    }
    
    // Adicionar novo pedido no início do array
    pedidos.unshift(pedido);
    
    localStorage.setItem('pedidosFarmacia', JSON.stringify(pedidos));
}

// Fechar confirmação
function fecharConfirmacao() {
    document.getElementById('confirmation-modal').classList.remove('active');
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinhoFarmacia', JSON.stringify(carrinho));
}

// Carregar carrinho do localStorage
function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinhoFarmacia');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
    }
}

// Mostrar toast notification
function mostrarToast(mensagem, tipo = 'success') {
    // Remover toast existente
    const toastExistente = document.querySelector('.toast');
    if (toastExistente) {
        toastExistente.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    toast.textContent = mensagem;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Mostrar campo de troco quando selecionar dinheiro e calcular desconto PIX
function mostrarCampoTroco() {
    const pagamento = document.getElementById('pagamento');
    const grupoTroco = document.getElementById('grupo-troco');
    const valorTroco = document.getElementById('valor-troco');
    const descontoPix = document.getElementById('desconto-pix');
    
    if (pagamento.value === 'dinheiro') {
        grupoTroco.style.display = 'block';
        valorTroco.value = '';
        document.getElementById('troco-info').textContent = '';
    } else {
        grupoTroco.style.display = 'none';
    }
    
    // Calcular desconto do PIX
    if (pagamento.value === 'pix') {
        descontoPix.style.display = 'block';
        document.getElementById('checkout-total-label').textContent = 'Total com desconto:';
        aplicarDescontoPix();
    } else {
        descontoPix.style.display = 'none';
        document.getElementById('checkout-total-label').textContent = 'Total:';
        // Restaurar total original
        const totalOriginal = document.getElementById('checkout-total-value').dataset.totalOriginal || document.getElementById('checkout-total-value').textContent;
        document.getElementById('checkout-total-value').textContent = totalOriginal;
    }
}

// Aplicar desconto do PIX
function aplicarDescontoPix() {
    const totalText = document.getElementById('checkout-total-value').dataset.totalOriginal || document.getElementById('checkout-total-value').textContent;
    const total = parseFloat(totalText.replace('R$ ', '').replace(',', '.'));
    
    const desconto = total * 0.05; // 5% de desconto
    const totalComDesconto = total - desconto;
    
    document.getElementById('desconto-pix-value').textContent = `- R$ ${desconto.toFixed(2).replace('.', ',')}`;
    document.getElementById('checkout-total-value').textContent = `R$ ${totalComDesconto.toFixed(2).replace('.', ',')}`;
}

// Calcular troco
function calcularTroco() {
    const valorTrocoInput = document.getElementById('valor-troco');
    const trocoInfo = document.getElementById('troco-info');
    
    // Pegar o total do pedido
    const totalText = document.getElementById('checkout-total-value').textContent;
    const total = parseFloat(totalText.replace('R$ ', '').replace(',', '.'));
    
    // Pegar o valor para troco
    let valorParaTroco = parseFloat(valorTrocoInput.value.replace('R$ ', '').replace(',', '.').replace('.', ''));
    
    // Se o valor for inválido, limpar informação
    if (isNaN(valorParaTroco) || valorParaTroco <= 0) {
        trocoInfo.textContent = '';
        return;
    }
    
    // Formatar o valor digitado como moeda
    if (valorTrocoInput.value.length > 0) {
        const valorFormatado = (valorParaTroco / 100).toFixed(2).replace('.', ',');
        valorTrocoInput.value = `R$ ${valorFormatado}`;
        valorParaTroco = valorParaTroco / 100;
    }
    
    // Calcular troco
    if (valorParaTroco < total) {
        trocoInfo.textContent = `⚠️ Valor insuficiente! Faltam R$ ${(total - valorParaTroco).toFixed(2).replace('.', ',')}`;
        trocoInfo.style.color = 'var(--danger-color)';
    } else if (valorParaTroco === total) {
        trocoInfo.textContent = '✓ Valor exato! Não há troco.';
        trocoInfo.style.color = 'var(--success-color)';
    } else {
        const troco = valorParaTroco - total;
        trocoInfo.textContent = `💵 Troco: R$ ${troco.toFixed(2).replace('.', ',')}`;
        trocoInfo.style.color = 'var(--primary-color)';
    }
}

// Formatação de máscara para campos
document.addEventListener('DOMContentLoaded', () => {
    // Máscara para telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 10) {
                // Celular: (XX) XXXXX-XXXX
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
            } else if (value.length > 5) {
                // Telefone fixo: (XX) XXXX-XXXX
                value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`;
            } else if (value.length > 2) {
                // Apenas DDD: (XX) XXXX
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            }
            e.target.value = value;
        });
    }

    // Máscara para CPF
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            if (value.length > 9) {
                value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
            } else if (value.length > 6) {
                value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}-${value.slice(9)}`;
            } else if (value.length > 3) {
                value = `${value.slice(0, 3)}.${value.slice(3)}-${value.slice(6)}`;
            }
            e.target.value = value;
        });
    }

    // Máscara para CEP e busca automática
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 8) value = value.slice(0, 8);
            if (value.length > 5) {
                value = `${value.slice(0, 5)}-${value.slice(5)}`;
            }
            e.target.value = value;
            
            // Quando o CEP estiver completo (8 dígitos), buscar endereço
            if (value.replace(/\D/g, '').length === 8) {
                buscarCep(value.replace(/\D/g, ''));
            }
        });
    }
});

// Toggle Meus Pedidos
function toggleMeusPedidos() {
    const modal = document.getElementById('meus-pedidos-modal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        document.getElementById('consulta-cpf').value = '';
        document.getElementById('pedidos-consulta').innerHTML = '';
        consultaAtiva = false;
        if (intervaloConsulta) {
            clearInterval(intervaloConsulta);
            intervaloConsulta = null;
        }
        
        // Verificar se usuário está logado
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogadoFarmacia'));
        const areaLogin = document.getElementById('area-login-pedidos');
        
        if (usuarioLogado) {
            // Se estiver logado, esconder área de login e consultar pedidos automaticamente
            if (areaLogin) areaLogin.style.display = 'none';
            consultarPedidos();
        } else {
            // Se não estiver logado, mostrar área de login
            if (areaLogin) areaLogin.style.display = 'block';
        }
    } else {
        consultaAtiva = false;
        if (intervaloConsulta) {
            clearInterval(intervaloConsulta);
            intervaloConsulta = null;
        }
    }
}

// Formatar CPF na consulta
function formatarCPFConsulta(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 9) {
        value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
    } else if (value.length > 6) {
        value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}-${value.slice(9)}`;
    } else if (value.length > 3) {
        value = `${value.slice(0, 3)}.${value.slice(3)}-${value.slice(6)}`;
    }
    e.target.value = value;
}

// Consultar pedidos do cliente
let consultaAtiva = false;
let intervaloConsulta = null;

function consultarPedidos() {
    const container = document.getElementById('pedidos-consulta');
    
    // Verificar se usuário está logado
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogadoFarmacia'));
    
    let cpfConsulta;
    
    if (usuarioLogado) {
        // Se estiver logado, usar CPF do usuário logado
        const usuarios = JSON.parse(localStorage.getItem('usuariosFarmacia') || '[]');
        const usuario = usuarios.find(u => u.email === usuarioLogado.email);
        
        if (usuario) {
            cpfConsulta = usuario.cpf.replace(/\D/g, '');
        }
    } else {
        // Se não estiver logado, pedir CPF
        cpfConsulta = document.getElementById('consulta-cpf').value.replace(/\D/g, '');
        
        if (!cpfConsulta || cpfConsulta.length !== 11) {
            container.innerHTML = '<p style="color: var(--danger-color); text-align: center; padding: 20px;">Por favor, informe um CPF válido.</p>';
            return;
        }
    }
    
    // Iniciar consulta
    consultaAtiva = true;
    renderizarConsultaPedidos(cpfConsulta);
    
    // Atualizar automaticamente a cada 20 segundos
    if (intervaloConsulta) {
        clearInterval(intervaloConsulta);
    }
    intervaloConsulta = setInterval(() => {
        if (consultaAtiva) {
            renderizarConsultaPedidos(cpfConsulta);
        }
    }, 20000);
}

function renderizarConsultaPedidos(cpfConsulta) {
    const container = document.getElementById('pedidos-consulta');
    
    const pedidosSalvos = localStorage.getItem('pedidosFarmacia');
    if (!pedidosSalvos) {
        container.innerHTML = '<p style="color: var(--text-light); text-align: center; padding: 20px;">Nenhum pedido encontrado.</p>';
        return;
    }
    
    const pedidos = JSON.parse(pedidosSalvos);
    const pedidosCliente = pedidos.filter(p => p.cpf.replace(/\D/g, '') === cpfConsulta);
    
    if (pedidosCliente.length === 0) {
        container.innerHTML = '<p style="color: var(--text-light); text-align: center; padding: 20px;">Nenhum pedido encontrado para este CPF.</p>';
        return;
    }
    
    container.innerHTML = `
        <p style="font-size: 0.8rem; color: var(--success-color); margin-bottom: 15px; text-align: center;">
            🔄 Atualizando automaticamente a cada 20 segundos...
        </p>
    ` + pedidosCliente.map(pedido => `
        <div class="pedido-cliente" style="background: var(--bg-light); border-radius: 12px; padding: 15px; margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="font-weight: 700; color: var(--primary-color);">${pedido.id}</span>
                <span class="pedido-status status-${pedido.status}" style="padding: 5px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 600;">
                    ${formatarStatusPedido(pedido.status)}
                </span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-light); margin-bottom: 8px;">
                <p><strong>Data:</strong> ${formatarData(pedido.dataPedido)}</p>
                <p><strong>Itens:</strong> ${pedido.itens.length} produto(s)</p>
                <p><strong>Total:</strong> <span style="color: var(--primary-color); font-weight: 600;">${pedido.total}</span></p>
            </div>
            <div style="background: var(--white); border-radius: 8px; padding: 10px; margin-top: 10px;">
                <p style="font-size: 0.8rem; color: var(--text-light); margin-bottom: 5px;"><strong>Itens do pedido:</strong></p>
                ${pedido.itens.map(item => `
                    <p style="font-size: 0.85rem; padding: 3px 0;">${item.emoji} ${item.nome} x${item.quantidade}</p>
                `).join('')}
            </div>
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-color);">
                <p style="font-size: 0.8rem; color: var(--text-light);"><strong>Endereço de entrega:</strong></p>
                <p style="font-size: 0.85rem;">${pedido.endereco}${pedido.complemento ? ' - ' + pedido.complemento : ''}</p>
                <p style="font-size: 0.85rem;">${pedido.cidade}-${pedido.estado}</p>
            </div>
        </div>
    `).join('');
}

// Formatar status do pedido
function formatarStatusPedido(status) {
    const statusMap = {
        'pendente': '⏳ Pendente',
        'preparando': '📦 Preparando',
        'pronto': '✅ Pronto para entrega',
        'saindo_entrega': '🚚 Saiu para entrega',
        'entregue': '🚚 Entregue'
    };
    return statusMap[status] || status;
}

// Formatar data
function formatarData(dataISO) {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR') + ' às ' + data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// Buscar CEP via API ViaCEP
function buscarCep(cep) {
    const enderecoInput = document.getElementById('endereco');
    const cidadeInput = document.getElementById('cidade');
    const estadoSelect = document.getElementById('estado');
    
    // Limpar campos
    enderecoInput.value = '';
    cidadeInput.value = '';
    estadoSelect.value = '';
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                // Preencher cidade e estado
                cidadeInput.value = data.localidade;
                estadoSelect.value = data.uf;
                
                // Preencher endereço com logradouro (usuário completará com número)
                enderecoInput.value = `${data.logradouro}`;
                
                // Focar no campo de endereço para o usuário digitar o número
                enderecoInput.focus();
                
                mostrarToast('CEP encontrado! Complete com o número.', 'success');
            } else {
                mostrarToast('CEP não encontrado. Preencha manualmente.', 'error');
            }
        })
        .catch(() => {
            mostrarToast('Erro ao buscar CEP. Preencha manualmente.', 'error');
        });
}
