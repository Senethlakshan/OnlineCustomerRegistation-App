package com.example.CustomerRegistrationApp.controller;

import com.example.CustomerRegistrationApp.model.Customer;
import com.example.CustomerRegistrationApp.service.CustomerService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/api/v1/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    private static final Logger logger = LogManager.getLogger(CustomerController.class);

    @Autowired
    private CustomerService customerService;

    //view all customers details
    @GetMapping("/viewall")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        logger.info("Fetching all customers.");
        List<Customer> customers = customerService.listAllCustomer();
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    //search customer details based customer id
    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        logger.info("Fetching customer by ID: {}", id);
        try {
            Customer customer = customerService.getCustomer(id);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            logger.error("Customer not found for ID: {}", id);
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //add new customer
    @PostMapping("/add")
    public ResponseEntity<String> addCustomer(@RequestBody Customer customer) {
        logger.info("Adding a new customer: {}", customer);
        customer.setRegistrationDate(new Date());

        String nicNumber = customer.getNicNumber();
        Optional<Customer> existingCustomer = customerService.getCustomerByNicNumber(nicNumber);

        if (existingCustomer.isPresent()) {
            return new ResponseEntity<>("NIC number is already registered.", HttpStatus.BAD_REQUEST);
        }

        customerService.saveCustomer(customer);
        return new ResponseEntity<>("Customer saved successfully", HttpStatus.CREATED);
    }


    //update customer details
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCustomer(@RequestBody Customer customer, @PathVariable Long id) {
        logger.info("Updating customer with ID: {}", id);
        String nicNumber = customer.getNicNumber();
        Optional<Customer> existingCustomer = customerService.getCustomerByNicNumber(nicNumber);

        if (existingCustomer.isPresent() && !existingCustomer.get().getCustomerId().equals(id)) {
            return new ResponseEntity<>("NIC number is already registered.", HttpStatus.BAD_REQUEST);
        }

        try {
            Customer existingCustomerData = customerService.getCustomer(id);
            customer.setCustomerId(id);
            customerService.saveCustomer(customer);
            return new ResponseEntity<>("Customer updated successfully", HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
        }
    }

    //delete customer
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {
        logger.info("Deleting customer with ID: {}", id);
        try {
            customerService.deleteCustomer(id);
            return new ResponseEntity<>("Customer deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            logger.error("An error occurred while deleting the customer with ID: {}", id, e);
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //search by nic number
    @PostMapping("/get-by-nic")
    public ResponseEntity<?> getCustomerByNic(@RequestBody Map<String, String> requestBody) {
        String nicNumber = requestBody.get("nicNumber");

        if (nicNumber == null || nicNumber.isEmpty()) {
            String errorMessage = "NIC number is required.";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }

        logger.info("Fetching customer by NIC number: {}", nicNumber);
        Optional<Customer> customer = customerService.getCustomerByNicNumber(nicNumber);

        if (customer.isPresent()) {
            return new ResponseEntity<>(customer.get(), HttpStatus.OK);
        } else {
            String errorMessage = "No customer found for the provided NIC number.";
            return new ResponseEntity<>(errorMessage, HttpStatus.NOT_FOUND);
        }
    }

    // Get customer registration count
    @GetMapping("/registration-count")
    public ResponseEntity<Long> getCustomerRegistrationCount() {
        logger.info("Fetching customer registration count.");
        long count = customerService.getCustomerRegistrationCount();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }




}
