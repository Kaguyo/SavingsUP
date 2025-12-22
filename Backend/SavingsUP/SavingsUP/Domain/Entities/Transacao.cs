using SavingsUP.Domain.Entities;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Transacoes")]
public class Transacao
{
    [Key]
    public Guid? Id { get; set; }

    [Required]
    [Column("Descricao")]
    [MaxLength(200)]
    public required string Description { get; set; }

    private decimal _value;
    [Required]
    [Column(TypeName = "decimal(18,2)")]
    public required decimal Value
    {
        get => _value;
        set => _value = Math.Round(value, 2, MidpointRounding.AwayFromZero);
    }

    private string _type = null!;
    [Required]
    [Column("Tipo")]
    [MaxLength(20)]
    public required string Type
    {
        get => _type;
        set
        {
            var val = value.ToLower();
            if (val != "despesa" && val != "receita")
                throw new ArgumentException("O tipo deve ser apenas 'despesa' ou 'receita'.");
            _type = val;
        }
    }

    [Required]
    [Column("CategoriasId")]
    public required Guid CategoriaId { get; set; }

    [Required]
    public required Guid PessoaId { get; set; }

    [ForeignKey("CategoriaId")]
    public Categoria? Categoria { get; set; }

    [ForeignKey("PessoaId")]
    public Pessoa? Pessoa { get; set; }


    public void ValidarRegraIdade(byte idadePessoa)
    {
        if (idadePessoa < 18 && Type == "receita")
        {
            throw new InvalidOperationException("Menores de idade podem registrar apenas despesas.");
        }
    }
}