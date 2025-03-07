# Template Vanilla JS e TypeScript com Linting Configurado

Este é um template para projetos Vanilla JS e TypeScript com linting configurado para garantir a qualidade e consistência do código. Este template inclui configurações para ESLint, Stylelint, HTMLHint e Prettier.

## Linters Configurados

### ESLint

- **@eslint/js**: Linting para JavaScript.
- **@typescript-eslint/eslint-plugin**: Linting para TypeScript.
- **@typescript-eslint/parser**: Parser para TypeScript.
- **eslint-plugin-import**: Verificação de importações.
- **eslint-plugin-prettier**: Integração do Prettier com ESLint.

### Stylelint

- **stylelint**: Linting para CSS.
- **stylelint-config-standard**: Conjunto de regras padrão para Stylelint.

### HTMLHint

- **htmlhint**: Linting para HTML.

### Prettier

- **prettier**: Formatação de código.

## Instalação

### Dependências

1. Certifique-se de ter o Node.js e o npm instalados.
2. Instale as dependências do projeto executando o comando:

    ```sh
    npm install
    ```

### Extensões do VS Code

Para uma melhor experiência de desenvolvimento, instale as seguintes extensões no VS Code:

1. **ESLint**: [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. **Stylelint**: [Stylelint Extension](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
3. **HTMLHint**: [HTMLHint Extension](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
4. **Prettier**: [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Scripts do package.json

### Compilar TypeScript

Para compilar os arquivos TypeScript da pasta `scripts/ts` para a pasta `scripts/js`, execute o comando:

```sh
npm run build
```

Para compilar automaticamente sempre que houver mudanças nos arquivos TypeScript, utilize o comando:

```sh
npm run watch
```
