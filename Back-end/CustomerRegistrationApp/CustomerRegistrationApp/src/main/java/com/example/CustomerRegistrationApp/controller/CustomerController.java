package com.example.CustomerRegistrationApp.controller;

import com.example.CustomerRegistrationApp.model.Customer;
import com.example.CustomerRegistrationApp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(value = "/api/v1/")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    //Get all Customer details
    @GetMapping("/AllCustomer")
    public List<Customer> list() {
        return customerService.listAllCustomer();
    }

    //Get a Customer by id
    @GetMapping("/getCustomerById/{id}")
    public ResponseEntity<Customer> get(@PathVariable Long id) {
        try {
            Customer std= customerService.getCustomer(id);
            return new ResponseEntity<Customer>(std, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
        }
    }

    //Add new Customer
    @PostMapping(path="/addNewCustomer")
    public @ResponseBody String add(@RequestBody Customer std) {
        customerService.saveCustomer(std);
        return "Saved";
    }

    //Update Customer details
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestBody Customer std, @PathVariable Long id) {
        try {
            Customer existUser = customerService.getCustomer(id);
            std.setCustomerId(id);
            customerService.saveCustomer(std);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Delete Customer  details
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id) {
        try{
            customerService.deleteCustomer(id);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return null;
    }


}
