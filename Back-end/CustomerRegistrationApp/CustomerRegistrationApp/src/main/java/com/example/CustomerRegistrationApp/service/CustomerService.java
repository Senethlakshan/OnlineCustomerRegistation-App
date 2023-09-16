package com.example.CustomerRegistrationApp.service;

import com.example.CustomerRegistrationApp.model.Customer;
import com.example.CustomerRegistrationApp.repository.CusRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerService {

    private static final Logger logger = LogManager.getLogger(CustomerService.class);

    @Autowired
    private CusRepository cusRepository;

    public List<Customer> listAllCustomer() {
        logger.info("Listing all customers.");
        return cusRepository.findAll();
    }

    public Customer getCustomer(Long id) {
        logger.info("Getting customer by ID: {}", id);
        return cusRepository.findById(id).orElse(null);
    }

    public Optional<Customer> getCustomerByNicNumber(String nicNumber) {
        logger.info("Getting customer by NIC number: {}", nicNumber);
        return cusRepository.findByNicNumber(nicNumber);
    }

    public void saveCustomer(Customer customer) {
        logger.info("Saving customer: {}", customer);
        customer.setRegistrationDate(new Date());
        cusRepository.save(customer);
    }


    public void deleteCustomer(Long id) {
        logger.info("Deleting customer with ID: {}", id);
        cusRepository.deleteById(id);
    }

    public long getCustomerRegistrationCount() {
        logger.info("Getting customer registration count.");
        return cusRepository.count();
    }



}
