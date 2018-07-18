using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartBuild.Model
{
    [Table("Usuario")]
    public class Usuario
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]
        [Required]
        [DisplayName("IdUsuario")]
        public int IdUsuario { get; set; }

        [Required]
        [MaxLength(50)]
        [DisplayName("NomeUsuario")]
        public string NomeUsuario { get; set; }

        [MaxLength(9)]
        [DisplayName("Sexo")]
        public string Sexo { get; set; }

        [DisplayName("DataNascimento")]
        [MaxLength(10)]
        public DateTime? DataNascimento { get; set; }        
    }
}
