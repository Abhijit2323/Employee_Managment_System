package com.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class LeaveApplication {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	String employeeName;
	String reason;
	LocalDate fromDate;
	LocalDate toDate;
	String status = "Pending";
	int empid;
	public LeaveApplication() {
		super();
	}
	public LeaveApplication(int id, String employeeName, String reason, LocalDate fromDate, LocalDate toDate,
			String status, int empid) {
		super();
		this.id = id;
		this.employeeName = employeeName;
		this.reason = reason;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.status = status;
		this.empid = empid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public LocalDate getFromDate() {
		return fromDate;
	}
	public void setFromDate(LocalDate fromDate) {
		this.fromDate = fromDate;
	}
	public LocalDate getToDate() {
		return toDate;
	}
	public void setToDate(LocalDate toDate) {
		this.toDate = toDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	
	
}
