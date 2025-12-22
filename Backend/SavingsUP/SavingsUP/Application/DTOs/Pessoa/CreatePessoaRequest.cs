using System.ComponentModel.DataAnnotations;

namespace SavingsUP.Application.DTOs.Pessoa;

public class CreatePessoaRequest
{
    [Required(ErrorMessage = "O nome é obrigatório.")]
    [MaxLength(100, ErrorMessage = "O nome não pode exceder 100 caracteres.")]
    public required string Name { get; set; }

    [Required(ErrorMessage = "A idade é obrigatória.")]
    [Range(0, 150, ErrorMessage = "A idade deve estar entre 0 e 150.")]
    public required byte Age { get; set; }
}