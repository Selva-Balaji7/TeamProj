using AttendanceTask.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AttendanceTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class AttendanceController : Controller
    {
        private readonly AttendanceDbContext _context;


        public AttendanceController(AttendanceDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Attendance>>> GetAttendance()
        {
            return await _context.Attendances.ToListAsync();
        }

        [HttpGet("{EmpId}")]
        public async Task<ActionResult<Attendance>> GetAttendance(int EmpId)
        {
            var attendance = await _context.Attendances.FindAsync(EmpId);

            if(attendance == null)
            {
                return NotFound();
            }

            return attendance;
        }



        [HttpPost]
        public async Task<ActionResult<Attendance>> PostAttendance(Attendance attendance)
        {
            _context.Attendances.Add(attendance);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAttendance", new { EmpId = attendance.EmpId }, attendance);

        }



        [HttpPut("{EmpId}")]
        public async Task<ActionResult> PutAttendance(int EmpId, Attendance attendance)
        {
            if(EmpId != attendance.EmpId)
            {
                return BadRequest();
            }

            _context.Entry(attendance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                if(!AttendanceExists(EmpId))
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

        private bool AttendanceExists(int EmpId)
        {
            return _context.Attendances.Any(a => a.EmpId == EmpId);
        }

    }
}
