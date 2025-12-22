using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SavingsUP.Domain.Entities;

[Table("Pessoas")]
public class Pessoa
{
    [Key]
    public Guid? Id { get; set; }

    [Required]
    [Column("Nome")]
    [MaxLength(100)]
    public required string Name { get; set; }

    [Required]
    [Column("Idade", TypeName = "TINYINT")]
    public required byte Age { get; set; }
}