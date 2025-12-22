using System.ComponentModel.DataAnnotations;

namespace SavingsUP.Application.DTOs.Categoria;

public class CreateCategoriaRequest
{
    [Required(ErrorMessage = "A descrição é obrigatória.")]
    [MaxLength(100, ErrorMessage = "A descrição não pode exceder 100 caracteres.")]
    public required string Description { get; set; }

    [Required(ErrorMessage = "A finalidade é obrigatória.")]
    [MaxLength(20)]
    [RegularExpression("^(despesa|receita|despesa/receita)$",
        ErrorMessage = "Finalidade deve ser 'despesa', 'receita' ou 'despesa/receita'.")]
    public required string Purpose { get; set; }
}