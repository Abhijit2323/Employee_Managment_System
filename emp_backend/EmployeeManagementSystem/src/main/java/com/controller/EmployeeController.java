package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;
import com.service.EmployeeService;

@RestController
@CrossOrigin
public class EmployeeController {
	
	@Autowired
	EmployeeService service;
	
	@PostMapping("/addemployee")
	public String addemployee(@RequestBody Employee e) {
		return service.addemployee(e);
	}
	
	@GetMapping("/findallemp")
	public List<Employee> findallemp() {
		return service.findallemp();
	}
	
	@GetMapping("/getempbyid/{eid}")
	public Employee getempbyid(@PathVariable int eid) {
		return service.findempbyid(eid);
	}
	
	@DeleteMapping("/deleteempbyid/{eid}")
	public String deleteempbyid(@PathVariable int eid) {
		return service.deleteempbyid(eid);
	}
	
	@PutMapping("/updateemp/{eid}")
	public String updatemp(@PathVariable int eid,@RequestBody Employee newemp) {
		return service.updateemp(eid, newemp);
	}
	
	@GetMapping("/getbyfirstname/{firstname}")
	public List<Employee> findbyfirstname(@PathVariable String firstname){
		return service.findbyfirstname(firstname);
	}
	
	@GetMapping("/getbylastname/{lastname}")
	public List<Employee> findbylastname(@PathVariable String lastname){
		return service.findbylastname(lastname);
	}
	
	@GetMapping("/getbydept/{dept}")
	public List<Employee> findbydept(@PathVariable String dept){
		return service.findbydept(dept);
	}

	@GetMapping("/getbydesignation/{designation}")
	public List<Employee> findbydesignation(@PathVariable String designation){
		return service.findbydesignation(designation);
	}
	
}
