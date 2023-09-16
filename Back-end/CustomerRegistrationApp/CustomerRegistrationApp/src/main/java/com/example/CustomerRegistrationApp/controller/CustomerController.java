package com.example.CustomerRegistrationApp.controller;

import com.example.CustomerRegistrationApp.model.Customer;
import com.example.CustomerRegistrationApp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers() {
        List<Customer> customers = customerService.listAllCustomer();
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        try {
            Customer customer = customerService.getCustomer(id);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<String> addCustomer(@RequestBody Customer customer) {
        String nicNumber = customer.getNicNumber();
        Optional<Customer> existingCustomer = customerService.getCustomerByNicNumber(nicNumber);

        if (existingCustomer.isPresent()) {
            return new ResponseEntity<>("NIC number is already registered.", HttpStatus.BAD_REQUEST);
        }

        customerService.saveCustomer(customer);
        return new ResponseEntity<>("Customer saved successfully", HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCustomer(@RequestBody Customer customer, @PathVariable Long id) {
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

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {
        try {
            customerService.deleteCustomer(id);
            return new ResponseEntity<>("Customer deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
