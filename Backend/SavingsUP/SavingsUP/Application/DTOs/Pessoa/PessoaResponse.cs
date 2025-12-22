namespace SavingsUP.Application.DTOs.Pessoa;

public class PessoaResponse
{
    public required Guid Id { get; set; }
    public required string Name { get; set; }
    public required byte Age { get; set; }
}