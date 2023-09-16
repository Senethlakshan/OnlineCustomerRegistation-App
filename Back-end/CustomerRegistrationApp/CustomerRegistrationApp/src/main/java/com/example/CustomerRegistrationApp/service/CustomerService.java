package com.example.CustomerRegistrationApp.service;

import com.example.CustomerRegistrationApp.model.Customer;
import com.example.CustomerRegistrationApp.repository.CusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CustomerService {

    @Autowired
    private CusRepository cusRepository;

    public List<Customer> listAllCustomer() {
        return cusRepository.findAll();
    }

    public Customer getCustomer(Long id) {
        return cusRepository.findById(id).orElse(null);
    }

    public Optional<Customer> getCustomerByNicNumber(String nicNumber) {
        return cusRepository.findByNicNumber(nicNumber);
    }

    public void saveCustomer(Customer customer) {
        cusRepository.save(customer);
    }

    public void deleteCustomer(Long id) {
        cusRepository.deleteById(id);
    }
}
