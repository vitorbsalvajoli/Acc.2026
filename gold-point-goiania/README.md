# Gold Point Goiânia - Site de Compra e Venda de Ouro

## Visão Geral

O **Gold Point Goiânia** é um site moderno e profissional para compra e venda de ouro, prata, platina e outros metais preciosos. O site inclui um questionário completo para vendedores cadastrarem seus produtos com fotos e informações detalhadas.

## Estrutura do Projeto

```
gold-point-goiania/
├── index.html          # Página principal com questionário integrado
├── termos.html         # Página de Termos e Condições
├── privacidade.html    # Página de Política de Privacidade
├── css/
│   ├── style.css       # Estilos principais
│   └── pages.css       # Estilos para páginas internas
├── js/
│   └── main.js         # JavaScript com funcionalidades
├── images/             # Pasta para imagens (adicione suas imagens aqui)
└── uploads/            # Pasta para uploads de fotos (configurar backend)
```

## Funcionalidades

### Página Principal (index.html)
- **Header fixo** com navegação responsiva
- **Hero section** com imagem de fundo e call-to-action
- **Cotação do ouro** em tempo real (simulada)
- **Seção Sobre** com informações da empresa
- **Como Funciona** com passo a passo ilustrado
- **Questionário completo** para vendedores:
  - Dados pessoais (nome, e-mail, telefone)
  - Informações do produto (tipo, quilates, peso, estado)
  - Upload de até 10 fotos com drag & drop
  - Preferências de contato
- **Depoimentos** de clientes
- **Formulário de contato**
- **Footer** com links e redes sociais

### Formulário de Venda
- Validação de campos obrigatórios
- Máscara automática para telefone
- Upload de fotos com preview
- Drag and drop para upload
- Validação de tamanho e tipo de arquivo
- Modal de confirmação após envio

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com variáveis CSS, Flexbox e Grid
- **JavaScript** - Funcionalidades interativas (vanilla JS)
- **Font Awesome** - Ícones
- **Google Fonts** - Playfair Display e Roboto

## Como Usar

1. **Para visualizar o site:**
   - Abra o arquivo `index.html` em seu navegador
   - Ou use um servidor local (recomendado)

2. **Para usar com servidor local:**
   ```bash
   # Usando Python
   cd gold-point-goiania
   python -m http.server 8000
   
   # Usando Node.js (npx)
   npx serve gold-point-goiania
   ```

3. **Personalização:**
   - Edite `css/style.css` para alterar cores e estilos
   - Edite `js/main.js` para modificar funcionalidades
   - Substitua as informações de contato pelas reais

## Configuração do Backend (para uploads reais)

O site está configurado para frontend. Para processar os uploads e formulários, você precisará de um backend. Sugestões:

### Opção 1: PHP Simples
```php
// upload.php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fotos"]["name"]);
    
    if (move_uploaded_file($_FILES["fotos"]["tmp_name"], $target_file)) {
        echo json_encode(["success" => true, "message" => "Arquivo enviado com sucesso"]);
    } else {
        echo json_encode(["success" => false, "message" => "Erro no upload"]);
    }
}
?>
```

### Opção 2: Node.js com Express
```javascript
// server.js
const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array('fotos', 10), (req, res) => {
    res.json({ success: true, message: 'Arquivos enviados com sucesso' });
});

app.listen(3000);
```

## Personalização de Cores

As cores principais estão definidas no arquivo `css/style.css`:

```css
:root {
    --ouro-principal: #D4AF37;    /* Cor principal (ouro) */
    --ouro-claro: #F4E4A6;        /* Ouro claro */
    --ouro-escuro: #B8941E;       /* Ouro escuro */
    --preto: #1A1A1A;             /* Preto */
    --cinza-claro: #E8E8E8;       /* Cinza claro */
    /* ... outras cores */
}
```

## Responsividade

O site é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablets (768px - 1024px)
- Smartphones (< 768px)

## SEO e Metadados

Para melhorar o SEO, edite as meta tags no `index.html`:

```html
<meta name="description" content="Gold Point Goiânia - Compra e venda de ouro com os melhores preços. Avaliação gratuita e pagamento na hora.">
<meta name="keywords" content="ouro, compra de ouro, venda de ouro, joias, Goiânia, investimento">
```

## Contato e Suporte

- **E-mail:** contato@goldpointgoiania.com.br
- **Telefone:** (62) 3333-4444
- **Endereço:** Av. T-63, 1234 - Setor Bueno, Goiânia - GO

## Licença

Este projeto é de uso comercial. Todos os direitos reservados à Gold Point Goiânia.

---

© 2024 Gold Point Goiânia. Todos os direitos reservados.