# GitHub Pages e Codespaces

1. Guarda o teu website no repositorio username.github.io, para que fique disponivel live!
2. Usa o Codespaces para no browser editar os ficheiros do teu repositorio com VSCode!


## Sumário 
Visite o website disponível em https://ulht-pw.github.io/luciostuder.github.io/ 

* O GitHub é uma plataforma para alojar codigo fonte.
* Graças ao serviço GitHub Pages, permite alojar páginas web estáticas, ficando o seu site público num URL próprio.
* O servico Codespaces permite por outro lado editar online os ficheiros do seu repositório, apenas precisando de um browser para ter acesso a um ambiente de desenvolvimento profissional.

## Passo 1: Criar um Repositorio no GitHub
1. Usando o seu *username* do GitHub, crie um novo repositório com o nome `username.github.io` 
   * por exemplo `adalovelace.github.io`, ou `a222222.github.io`
2. Configure-o como publico
3. Clique em *create repository*

## Passo 2: Adicionar Ficheiros ao seu Site

### Opção 1: Adicionar a partir do GitHub Codespaces
1. Clique na tecla `.` para abrir o GitHub Codespaces
1. Adicione os seus ficheiros (HTML, CSS, JavaScript, imagens, etc.).
1. Clique no separador *Source control*
2. No separador *Changes*, clique no `+` em cada um dos ficheiros com mudanças, de modo a serem carregados
3. Escreva uma mensagem que descreva as mudanças que fez
4. Clique em *Commit & Push* para guardar as mudanças (commit) e as carregar no seu repositório (push).

### Opção 2: Adicionar a partir do seu PC
1. Clone o repositório para a sua máquina local usando Git:
    ```shell
    git clone https://github.com/adalovelace/adalovelace.github.io.git
    ```
2. Navegue até à pasta do repositório e abra-a com o VS Code:
    ```
    cd adalovelace.github.io
    code .
    ```
3. Adicione os seus ficheiros do site (HTML, CSS, JavaScript, imagens, etc.).

1. Carregue os seus ficheiros para commit:
    ```shell
    git add .
    ```
2. Faça o commit dos arquivos:
    ```shell
    git commit -m "Initial commit"
    ```
3. Carregue os arquivos para o GitHub:
    ```shell
    git push origin main
    ```

## Passo 4: Habilitar o GitHub Pages
1. Vá para o seu repositório no GitHub: https://github.com/adalovelace/adalovelace.github.io
1. Clique no separador *Settings*.
1. Vá até a seção *Pages* no lado esquerdo.

#### Configurar GitHub Pages
1. Na seção *Source*, selecione a branch que você quer usar (geralmente main ou master).
1. Deixe a configuração de pasta como / (root).
   * Isto se os seus ficheiros estão no diretório raiz, caso contrário especifique a pasta onde os arquivos do seu site estão localizados.
1. Clique em *Save*.

#### Aceda ai seu Site
* O seu site estará disponível em: https://adalovelace/adalovelace.github.io

