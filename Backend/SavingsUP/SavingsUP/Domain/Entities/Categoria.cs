using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SavingsUP.Domain.Entities;

[Table("Categorias")]
public class Categoria
{
    [Key]
    public Guid? Id { get; set; }

    [Required]
    [Column("Descricao")]
    [MaxLength(100)]
    public required string Description { get; set; }

    [Required]
    [Column("Finalidade")]
    [MaxLength(20)]
    public required string Purpose { get; set; }
}