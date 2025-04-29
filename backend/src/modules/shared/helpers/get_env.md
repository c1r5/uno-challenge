## Metodo getEnv

Este método `getEnv` garante a existência das variáveis de ambiente necessárias para o funcionamento da aplicação.

Benefícios:
- **Confiabilidade**: Evita erros em tempo de execução ao garantir que as variáveis de ambiente obrigatórias estão definidas.
- **Facilidade de Depuração**: Fornece mensagens claras quando uma variável de ambiente está ausente, facilitando a identificação de problemas.
- **Segurança**: Ajuda a evitar configurações incorretas ou valores padrão inseguros ao exigir explicitamente as variáveis necessárias.
- **Manutenção**: Centraliza a validação das variáveis de ambiente, tornando o código mais organizado e fácil de manter.
- **Portabilidade**: Garante que a aplicação funcione corretamente em diferentes ambientes (desenvolvimento, teste, produção) ao verificar as configurações essenciais.