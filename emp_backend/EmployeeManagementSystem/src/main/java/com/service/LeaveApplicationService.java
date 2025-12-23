package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.LeaveApplication;
import com.repository.LeaveApplicationRepository;

@Service
public class LeaveApplicationService {
	@Autowired
	LeaveApplicationRepository lrep;

	public String applyforleave(LeaveApplication leave) {
		leave.setStatus("Pending");
		lrep.save(leave);
		return "Apply for the leave sucessfully";
	}

	public List<LeaveApplication> findAllLeaves() {
		return lrep.findAll();
	}

	public List<LeaveApplication> findleavlistbyempid(int empid) {
		return lrep.findByEmpid(empid);
	}

	public String cancelLeave(int leaveid) {
		lrep.deleteById(leaveid);
		return "Leave Cancelled Successfully";
	}

	public String updateLeave(int leaveid, LeaveApplication updatedLeave) {
		LeaveApplication existingLeave = lrep.findById(leaveid).orElse(null);
		if (existingLeave == null) {
			return "No records found for given leave id";
		}
		if (updatedLeave.getFromDate() != null) {
			existingLeave.setFromDate(updatedLeave.getFromDate());
		}
		if (updatedLeave.getToDate() != null) {
			existingLeave.setToDate(updatedLeave.getToDate());
		}
		if (updatedLeave.getReason() != null) {
			existingLeave.setReason(updatedLeave.getReason());
		}
		lrep.save(existingLeave);
		return "Leave application Updated Successfully.";
	}

	public String updateLeaveStatus(int leaveid, String action) {
		LeaveApplication existingLeaveApplication = lrep.findById(leaveid).orElse(null);
		if (existingLeaveApplication != null) {
			existingLeaveApplication.setStatus(action);
			lrep.save(existingLeaveApplication);
		}
		return "Leave Status Updated Successfully";
	
}
}