using AttendanceTask.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AttendanceTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : Controller
    {

        private readonly AttendanceDbContext _context;


        public AdminController(AttendanceDbContext context)
        {
            _context = context;
        }

        [HttpGet("{UserName}")]
        public async Task<ActionResult<Admin>> GetAttendance(string UserName)
        {

            foreach(var admin in _context.Admins)
            {
                if(admin.UserName == UserName)
                {
                    return admin;
                }
            }
            return NotFound();
            
        }

    }
}
