package com.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int eid;
	String firstname;
	String lastname;
	String email;
	long contactno;
	String gender;
	LocalDate dob;
	LocalDate joiningdate;
	String designation;
	String dept;
	String reportingmanager;
	int exp;
	double salary;	
	String address;
	int UID;
	String image;
	String marriagestatus;
	
	
	public Employee() {
		super();
	}
	
	
	public Employee(int eid, String firstname, String lastname, String email, long contactno, String gender,
			LocalDate dob, LocalDate joiningdate, String designation, String dept, String reportingmanager, int exp,
			double salary, String address, int uID, String image, String marriagestatus) {
		super();
		this.eid = eid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.contactno = contactno;
		this.gender = gender;
		this.dob = dob;
		this.joiningdate = joiningdate;
		this.designation = designation;
		this.dept = dept;
		this.reportingmanager = reportingmanager;
		this.exp = exp;
		this.salary = salary;
		this.address = address;
		UID = uID;
		this.image = image;
		this.marriagestatus = marriagestatus;
	}


	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getContactno() {
		return contactno;
	}
	public void setContactno(long contactno) {
		this.contactno = contactno;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	public LocalDate getJoiningdate() {
		return joiningdate;
	}
	public void setJoiningdate(LocalDate joiningdate) {
		this.joiningdate = joiningdate;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public String getReportingmanager() {
		return reportingmanager;
	}
	public void setReportingmanager(String reportingmanager) {
		this.reportingmanager = reportingmanager;
	}
	public int getExp() {
		return exp;
	}
	public void setExp(int exp) {
		this.exp = exp;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getUID() {
		return UID;
	}
	public void setUID(int uID) {
		UID = uID;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getMarriagestatus() {
		return marriagestatus;
	}
	public void setMarriagestatus(String marriagestatus) {
		this.marriagestatus = marriagestatus;
	}
	
	
}
