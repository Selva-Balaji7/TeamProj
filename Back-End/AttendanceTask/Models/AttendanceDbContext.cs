using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace AttendanceTask.Models;

public partial class AttendanceDbContext : DbContext
{
    public AttendanceDbContext()
    {
    }

    public AttendanceDbContext(DbContextOptions<AttendanceDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<Attendance> Attendances { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=attendanceDB;Integrated Security=True;Connect Timeout=30;Encrypt=True;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Admin>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("admins");

            entity.Property(e => e.UserName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("userName");
            entity.Property(e => e.UserPassword)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("userPassword");
        });

        modelBuilder.Entity<Attendance>(entity =>
        {
            entity.HasKey(e => e.EmpId).HasName("PK__attendan__AFB3EC0D70B67406");

            entity.ToTable("attendance");

            entity.Property(e => e.EmpId)
                .ValueGeneratedNever()
                .HasColumnName("empId");
            entity.Property(e => e.EmpName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("empName");
            entity.Property(e => e.InTime)
                .HasDefaultValueSql("(NULL)")
                .HasColumnName("inTime");
            entity.Property(e => e.OutTime)
                .HasDefaultValueSql("(NULL)")
                .HasColumnName("outTime");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.EmpId).HasName("PK__employee__AFB3EC0DBACBDA35");

            entity.ToTable("employees");

            entity.Property(e => e.EmpId)
                .ValueGeneratedNever()
                .HasColumnName("empId");
            entity.Property(e => e.EmpName)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasColumnName("empName");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
