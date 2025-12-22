using System.ComponentModel.DataAnnotations;

namespace SavingsUP.Application.DTOs.Transacao;

public class CreateTransacaoRequest
{
    [Required(ErrorMessage = "A descrição é obrigatória.")]
    [MaxLength(200, ErrorMessage = "A descrição não pode exceder 200 caracteres.")]
    public required string Description { get; set; }

    [Required(ErrorMessage = "O valor é obrigatório.")]
    [Range(0.01, 9999999999999999.99, ErrorMessage = "O valor deve ser maior que zero.")]
    public required decimal Value { get; set; } // Alinhado com DECIMAL(18,2)

    [Required(ErrorMessage = "O tipo é obrigatório.")]
    [RegularExpression("^(receita|despesa)$", ErrorMessage = "O tipo deve ser 'receita' ou 'despesa'.")]
    public required string Type { get; set; }

    [Required(ErrorMessage = "A categoria é obrigatória.")]
    public required Guid CategoriaId { get; set; }

    [Required(ErrorMessage = "A pessoa é obrigatória.")]
    public required Guid PessoaId { get; set; }
}