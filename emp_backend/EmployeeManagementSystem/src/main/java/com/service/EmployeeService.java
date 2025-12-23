package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Employee;
import com.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository erep;

	public String addemployee(Employee e) {
		erep.save(e);
		return "Employee record added sucessfully";
	}

	public List<Employee> findallemp() {
		return erep.findAll();
	}

	public Employee findempbyid(int eid) {
		return erep.findById(eid).orElse(null);
	}

	public String deleteempbyid(int eid) {
		Employee existingemp = erep.findById(eid).orElse(null);
		if (existingemp == null) {
			return "No Record Found For Given ID to Delete";
		} else {
			erep.deleteById(eid);
			return "Record Deleted Sucessfully ..";
		}
	}

	public String updateemp(int eid, Employee newemp) {
		Employee existingemp = erep.findById(eid).orElse(null);

		if (existingemp == null) {
			return "No Record Found For Updation..!";
		}

		if (newemp.getFirstname() == null && newemp.getLastname() == null && newemp.getEmail() == null
				&& newemp.getAddress() == null && newemp.getContactno() == 0 && newemp.getDept() == null
				&& newemp.getDesignation() == null && newemp.getDob() == null && newemp.getExp() == 0
				&& newemp.getJoiningdate() == null && newemp.getMarriagestatus() == null
				&& newemp.getReportingmanager() == null && newemp.getSalary() == 0 && newemp.getUID() == 0
				&& newemp.getGender() == null && newemp.getImage()==null) {
			return "Please enter a data to update..!";
		}

		if (newemp.getFirstname() != null) {
			existingemp.setFirstname(newemp.getFirstname());
		}
		if (newemp.getLastname() != null) {
			existingemp.setLastname(newemp.getLastname());
			;
		}
		if (newemp.getEmail() != null) {
			existingemp.setEmail(newemp.getEmail());
		}
		if (newemp.getContactno() != 0) {
			existingemp.setContactno(newemp.getContactno());
		}
		if (newemp.getDept() != null) {
			existingemp.setDept(newemp.getDept());
		}
		if (newemp.getDesignation() != null) {
			existingemp.setDesignation(newemp.getDesignation());
		}
		if (newemp.getDob() != null) {
			existingemp.setDob(newemp.getDob());
		}
		if (newemp.getExp() != 0) {
			existingemp.setExp(newemp.getExp());
		}
		if (newemp.getGender() != null) {
			existingemp.setGender(newemp.getGender());
		}
		if (newemp.getJoiningdate() != null) {
			existingemp.setJoiningdate(newemp.getJoiningdate());
		}
		if (newemp.getMarriagestatus() != null) {
			existingemp.setMarriagestatus(newemp.getMarriagestatus());
		}
		if (newemp.getReportingmanager() != null) {
			existingemp.setReportingmanager(newemp.getReportingmanager());
		}
		if (newemp.getSalary() != 0) {
			existingemp.setSalary(newemp.getSalary());
		}
		if (newemp.getUID() != 0) {
			existingemp.setUID(newemp.getUID());
		}
		if (newemp.getAddress() != null) {
			existingemp.setAddress(newemp.getAddress());
		}
		if(newemp.getImage()!=null) {
			existingemp.setImage(newemp.getImage());
		}
		erep.save(existingemp);
		return "Employee Data Updated Sucessfully..!";
	}
	
	public List<Employee> findbyfirstname(String firstname){
		return erep.findByFirstname(firstname);
	}
	
	public List<Employee> findbylastname(String lastname){
		return erep.findByLastname(lastname);
	}
	
	public List<Employee> findbydept(String dept){
		return erep.findByDept(dept);
	}
	
	public List<Employee> findbydesignation(String designation){
		return erep.findByDesignation(designation);
	}


}
