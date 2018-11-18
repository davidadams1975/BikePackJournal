using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BikePackJournal.Models;
using BikePackJournal.Persistence;
using AutoMapper;
using BikePackJournal.Controllers.Resources;

namespace BikePackJournal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BikeMakesController : ControllerBase
    {
        private readonly BikePackDBContext _context;
        private readonly IMapper mapper;

        public BikeMakesController(BikePackDBContext context, IMapper mapper)
        {
            _context = context;
            this.mapper = mapper;
        }

        // GET: api/BikeMakes
        [HttpGet("[action]")]
        public IEnumerable<BikeMakeResource> GetBikeMakes()
        {
            var bikeMakes = _context.BikeMakes.Include(m => m.BikeModels).ToList();

            return mapper.Map<List<BikeMake>, List<BikeMakeResource>>(bikeMakes);
        }

        // GET: api/BikeMakes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBikeMake([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bikeMake = await _context.BikeMakes.FindAsync(id);

            if (bikeMake == null)
            {
                return NotFound();
            }

            return Ok(bikeMake);
        }

        // PUT: api/BikeMakes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBikeMake([FromRoute] int id, [FromBody] BikeMake bikeMake)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bikeMake.Id)
            {
                return BadRequest();
            }

            _context.Entry(bikeMake).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BikeMakeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BikeMakes
        [HttpPost]
        public async Task<IActionResult> PostBikeMake([FromBody] BikeMake bikeMake)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.BikeMakes.Add(bikeMake);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBikeMake", new { id = bikeMake.Id }, bikeMake);
        }

        // DELETE: api/BikeMakes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBikeMake([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bikeMake = await _context.BikeMakes.FindAsync(id);
            if (bikeMake == null)
            {
                return NotFound();
            }

            _context.BikeMakes.Remove(bikeMake);
            await _context.SaveChangesAsync();

            return Ok(bikeMake);
        }

        private bool BikeMakeExists(int id)
        {
            return _context.BikeMakes.Any(e => e.Id == id);
        }
    }
}