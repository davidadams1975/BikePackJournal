using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BikePackJournal.Models;
using Microsoft.AspNetCore.Mvc;

namespace BikePackJournal.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IActionResult GetBicycle()
        {
            //var bicycle = new BikeMake() { Brand = "Salsa", BikeModel = "Cutthroat", IsActive = true };
            //var bicycles = new List<BikeMake>();
            //bicycles.Add(bicycle);

            return Ok();
        }

        [HttpPost("[action]")]
        public IActionResult PostBicycle([FromBody] BikeMake bicycle)
        {
            //BikeMake item = new BikeMake() { Id = 1, Brand = bicycle.Brand + "Your Mom", BikeModel= bicycle.BikeModel + "Your other Mom", ActivityLevel = bicycle.ActivityLevel };

            return Ok();
        }

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        


        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
