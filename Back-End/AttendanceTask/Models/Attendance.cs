using System;
using System.Collections.Generic;

namespace AttendanceTask.Models;

public partial class Attendance
{
    public int EmpId { get; set; }

    public string EmpName { get; set; } = null!;

    public TimeOnly? InTime { get; set; }

    public TimeOnly? OutTime { get; set; }
}
