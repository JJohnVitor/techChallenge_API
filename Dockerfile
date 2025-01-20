# Usar uma imagem oficial do Node.js
FROM node:18-alpine

# Criar e definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Definir a variável de ambiente para o Node.js
ENV PORT=3000

# Expor a porta que o app usará
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "src/index.js"]

