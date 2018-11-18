using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BikePackJournal.Models
{
    public class BikeModel
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public BikeMake BikeMake { get; set; }
        public int BikeMakeId { get; set; }
    }
}
