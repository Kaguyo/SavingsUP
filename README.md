# SavingsUP
Monorepo para aplicação Restful de controle de gastos residênciais

Na raiz deste projeto você pode encontrar:
## APIModel.tldr

**APIModel.tldr** é um arquivo que funciona como um **resumo visual/diagrama** da arquitetura das APIs do projeto. Ele serve pra você entender mais rapidamente como as partes se comunicam e como os endpoints se conectam, sem ter que ler todo o código.

**O que é**  
Um desenho simplificado da solução, mostrando os principais contratos funcionalidades do sistema.

**Como abrir/usar**  
- **No navegador:** abra o arquivo direto (se for imagem ou markdown) que já dá pra ver o conteúdo.  
- **No VS Code:** dá pra usar extensões que renderizam `.tldr` (tldraw).

**Pra que serve**  
Ajuda a visualizar **toda a solução de API de cara**, sem aprofundar no código e serviços, e apenas explicitando em alto nível as regras das funcionalidades do sistema.

## 👌 Como Executar

### Banco de dados:

atualmente, esta aplicação depende de um banco de dados SQLServer em execução para se conectar.
no arquivo **db-setup.txt** localizado na raiz deste mono-repositório, há o comando para criar todas as tabelas com suas
devidas regras estruturais neste banco. Futuramente, a necessidade deste externo banco será substituída por uma migration
e pacotes de execução de SQLServer diretamente através do .NET, gerando automaticamente suas configurações estruturais e execução.

### Frontend: 
em seu terminal navegue para o diretório Frontend/SavingsUP e rode
em seu terminal utilize de algum gerenciador de pacotes para instalar todas as dependencias do projeto, ex: npm install. 
se necessário alteração da URL de seu backend, você pode encontra-la em App.tsx.
Então rode com npm run dev

### Backend:

### Necessário .NET 8.X.X instalado

### Para Testes com swagger: 
Se desejável, esta aplicação conta com swagger no ambiente de desenvolvimento, através da variavel de ambiente "ASPNETCORE_ENVIRONMENT" localizada em
**Backend/SavingsUP/SavingsUP/Properties/launchSettings.json**, remover o valor "Development" dessa variavel para qualquer perfil de execução, desativará a utilização
do swagger UI para o perfil de execução, além de deixar de apontar para o arquivo de configurações de ambiente **appsettings.Development.json** e passar a apontar para
**appsettings.{novo-valor-atribuido}.json**, ou simplesmente **appsettings.json** caso o arquivo especificado não seja encontrado.

### Dependências e configurações de execução:
Em seu terminal, navegue para o diretório Backend/SavingsUP e rode
em seu terminal o comando: **dotnet restore** este, por meio da solução existente neste diretório, atualizará todos pacotes necessários para
a execução do projeto. Então, atualize suas configurações de conexão à Banco de dados no arquivo de configuração Backend/SavingsUP/SavingsUP/appsettings.json.
Altere como necessário a propriedade "ConnectionStrings", para se conectar ao seu database SQLServer. Altere também as configurações de execução em:
**Backend/SavingsUP/SavingsUP/Properties/launchSettings.json** lá você pode encontrar os **perfis de configuração e execução do servidor backend**.
para executar algum dos perfis, execute o comando: dotnet run --launch-profile **nome do perfil** 

