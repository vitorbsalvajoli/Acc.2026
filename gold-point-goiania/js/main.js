/* ============================================
   Gold Point Goiânia - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            const icon = this.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Fechar menu ao clicar em um link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Data da Cotação
    const dataCotacaoEl = document.getElementById('dataCotacao');
    if (dataCotacaoEl) {
        const hoje = new Date();
        const dataFormatada = hoje.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        dataCotacaoEl.textContent = dataFormatada;
    }
    
    // Upload de Fotos
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fotos');
    const previewContainer = document.getElementById('previewContainer');
    const uploadPlaceholder = document.getElementById('uploadPlaceholder');
    const MAX_FILES = 10;
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    
    let uploadedFiles = [];
    
    if (uploadArea && fileInput && previewContainer) {
        // Clique na área de upload
        uploadArea.addEventListener('click', function(e) {
            if (e.target.type !== 'file') {
                fileInput.click();
            }
        });
        
        // Drag and Drop
        uploadArea.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('dragover');
        });
        
        uploadArea.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
        });
        
        uploadArea.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('dragover');
            
            const files = e.dataTransfer.files;
            handleFiles(files);
        });
        
        // Input file change
        fileInput.addEventListener('change', function() {
            handleFiles(this.files);
        });
        
        function handleFiles(files) {
            const newFiles = Array.from(files);
            const remainingSlots = MAX_FILES - uploadedFiles.length;
            
            if (remainingSlots <= 0) {
                showAlert('Você já atingiu o limite de 10 fotos.', 'error');
                return;
            }
            
            const filesToProcess = newFiles.slice(0, remainingSlots);
            
            filesToProcess.forEach(file => {
                // Validar tipo
                if (!file.type.match('image.*')) {
                    showAlert(`O arquivo "${file.name}" não é uma imagem válida.`, 'error');
                    return;
                }
                
                // Validar tamanho
                if (file.size > MAX_FILE_SIZE) {
                    showAlert(`O arquivo "${file.name}" excede 5MB.`, 'error');
                    return;
                }
                
                // Adicionar aos arquivos
                uploadedFiles.push(file);
                
                // Criar preview
                const reader = new FileReader();
                reader.onload = function(e) {
                    createPreview(e.target.result, uploadedFiles.length - 1);
                };
                reader.readAsDataURL(file);
            });
            
            if (newFiles.length > remainingSlots) {
                showAlert(`Apenas ${remainingSlots} fotos foram adicionadas (limite de ${MAX_FILES}).`, 'warning');
            }
            
            // Atualizar placeholder
            updateUploadPlaceholder();
        }
        
        function createPreview(src, index) {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview-item';
            previewItem.innerHTML = `
                <img src="${src}" alt="Preview da foto ${index + 1}">
                <button type="button" class="remove-btn" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            previewContainer.appendChild(previewItem);
            
            // Evento de remover
            const removeBtn = previewItem.querySelector('.remove-btn');
            removeBtn.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                uploadedFiles.splice(idx, 1);
                previewItem.remove();
                updatePreviews();
                updateUploadPlaceholder();
            });
        }
        
        function updatePreviews() {
            // Reindexar os botões de remover
            const previews = previewContainer.querySelectorAll('.preview-item');
            previews.forEach((preview, idx) => {
                const btn = preview.querySelector('.remove-btn');
                if (btn) {
                    btn.dataset.index = idx;
                }
            });
        }
        
        function updateUploadPlaceholder() {
            if (uploadedFiles.length > 0) {
                uploadPlaceholder.style.display = 'none';
            } else {
                uploadPlaceholder.style.display = 'block';
            }
        }
    }
    
    // Formulário de Venda
    const formVenda = document.getElementById('formVenda');
    
    if (formVenda) {
        // Máscara para telefone
        const telefoneInput = document.getElementById('telefone');
        if (telefoneInput) {
            telefoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 11) value = value.slice(0, 11);
                
                if (value.length > 10) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                } else if (value.length > 5) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}-${value.slice(5)}`;
                } else if (value.length > 2) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                } else if (value.length > 0) {
                    value = `(${value}`;
                }
                
                e.target.value = value;
            });
        }
        
        // Validação do formulário
        formVenda.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos obrigatórios
            const requiredFields = formVenda.querySelectorAll('[required]');
            let isValid = true;
            let errorMessage = '';
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--vermelho)';
                    if (!errorMessage) {
                        errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
                    }
                } else {
                    field.style.borderColor = 'var(--cinza-claro)';
                }
            });
            
            // Validar e-mail
            const emailField = document.getElementById('email');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    isValid = false;
                    emailField.style.borderColor = 'var(--vermelho)';
                    errorMessage = 'Por favor, insira um e-mail válido.';
                }
            }
            
            // Validar telefone
            const telefoneField = document.getElementById('telefone');
            if (telefoneField && telefoneField.value) {
                const telefoneLimpo = telefoneField.value.replace(/\D/g, '');
                if (telefoneLimpo.length < 10) {
                    isValid = false;
                    telefoneField.style.borderColor = 'var(--vermelho)';
                    errorMessage = 'Por favor, insira um telefone válido.';
                }
            }
            
            // Validar termos
            const termosCheckbox = document.getElementById('termos');
            if (termosCheckbox && !termosCheckbox.checked) {
                isValid = false;
                errorMessage = 'Por favor, aceite os termos e condições.';
            }
            
            if (!isValid) {
                showAlert(errorMessage, 'error');
                return;
            }
            
            // Simular envio do formulário
            const btnEnviar = document.getElementById('btnEnviar');
            if (btnEnviar) {
                btnEnviar.disabled = true;
                btnEnviar.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            }
            
            // Simular delay de envio
            setTimeout(function() {
                // Mostrar modal de confirmação
                const modal = document.getElementById('modalConfirmacao');
                if (modal) {
                    modal.classList.add('active');
                }
                
                // Resetar formulário
                formVenda.reset();
                uploadedFiles = [];
                if (previewContainer) {
                    previewContainer.innerHTML = '';
                }
                updateUploadPlaceholder();
                
                if (btnEnviar) {
                    btnEnviar.disabled = false;
                    btnEnviar.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Proposta';
                }
            }, 2000);
        });
    }
    
    // Formulário de Contato
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button[type="submit"]');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            }
            
            setTimeout(function() {
                showAlert('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                formContato.reset();
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = 'Enviar Mensagem';
                }
            }, 1500);
        });
    }
    
    // Scroll Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header com sombra ao rolar
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Animação de entrada dos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.passo, .depoimento, .cotacao-item, .sobre-content').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}
);

// Função para fechar modal
function fecharModal() {
    const modal = document.getElementById('modalConfirmacao');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Função para mostrar alertas
function showAlert(message, type = 'info') {
    // Remover alertas existentes
    const existingAlerts = document.querySelectorAll('.custom-alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Criar novo alert
    const alert = document.createElement('div');
    alert.className = `custom-alert alert-${type}`;
    alert.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
    `;
    
    // Estilos do alert
    alert.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        background: ${type === 'error' ? '#E74C3C' : type === 'success' ? '#27AE60' : '#3498DB'};
        color: white;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    // Adicionar animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Botão de fechar
    const closeBtn = alert.querySelector('button');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: auto;
        padding: 5px;
        font-size: 1rem;
    `;
    
    document.body.appendChild(alert);
    
    // Auto remover após 5 segundos
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(e) {
    const modal = document.getElementById('modalConfirmacao');
    if (modal && e.target === modal) {
        modal.classList.remove('active');
    }
});

// Fechar modal com Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('modalConfirmacao');
        if (modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    }
});