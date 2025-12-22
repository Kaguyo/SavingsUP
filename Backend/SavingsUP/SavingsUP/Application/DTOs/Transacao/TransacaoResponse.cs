namespace SavingsUP.Application.DTOs.Transacao;

public class TransacaoResponse
{
    public required Guid Id { get; set; }
    public required string Description { get; set; }
    public required decimal Value { get; set; }
    public required string Type { get; set; }
    public required Guid CategoriaId { get; set; }
    public required Guid PessoaId { get; set; }
}