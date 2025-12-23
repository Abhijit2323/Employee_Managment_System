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

import com.entity.LeaveApplication;
import com.service.LeaveApplicationService;

@RestController
@CrossOrigin
public class LeaveApplicationController {

	@Autowired
	LeaveApplicationService service;
	
	@PostMapping("/applyforleave")
	public String applyForLeave(@RequestBody LeaveApplication newleave) {
		return service.applyforleave(newleave);
	}
	
	@GetMapping("/findallleaves")
	public List<LeaveApplication> findAllLeaves(){
		return service.findAllLeaves();
	}
	
	@GetMapping("/findleavebyempid/{empid}")
	public List<LeaveApplication> findAllLeavesByEmpId(@PathVariable int empid){
		return service.findleavlistbyempid(empid);
	}
	
	@DeleteMapping("/cancelleave/{leaveid}")
	public String cancelleave(@PathVariable int leaveid) {
		return service.cancelLeave(leaveid);
	}
	
	@PutMapping("/updateleave/{leaveid}")
	public String updateleave(@PathVariable int leaveid,@RequestBody LeaveApplication updatedleave ) {
		return service.updateLeave(leaveid, updatedleave);
	}
	
	@PutMapping("/updatestatus/{leaveid}/{action}")
	public String updateLeaveStatus(@PathVariable int leaveid,@PathVariable String action) {
		return service.updateLeaveStatus(leaveid, action);
	}
	

}
