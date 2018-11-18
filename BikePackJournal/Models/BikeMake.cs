using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BikePackJournal.Models
{
    public class BikeMake
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public ICollection<BikeModel> BikeModels { get; set; }

        public BikeMake()
        {
            BikeModels = new Collection<BikeModel>();
        }
    }
}
