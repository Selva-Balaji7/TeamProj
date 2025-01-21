using Microsoft.AspNetCore.Mvc;

namespace AttendanceTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StatusController : ControllerBase
    {
        [HttpGet]
        public ActionResult GetStatus()
        {
            return Ok();
        }
    }
}
