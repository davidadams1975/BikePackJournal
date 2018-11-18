using AutoMapper;
using BikePackJournal.Controllers.Resources;
using BikePackJournal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BikePackJournal.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<BikeMake, BikeMakeResource>();
            CreateMap<BikeModel, BikeModelResource>();
        }
    }
}
