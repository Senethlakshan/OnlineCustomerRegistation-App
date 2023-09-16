package com.example.CustomerRegistrationApp.service;

import com.example.CustomerRegistrationApp.model.Customer;
import com.example.CustomerRegistrationApp.repository.CusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CustomerService {

    @Autowired
    private CusRepository cusRepository;

    public List<Customer> listAllCustomer() {
        return cusRepository.findAll();
    }

    public Customer getCustomer(Long id) {
        return cusRepository.findById(id).get();
    }

    public void saveCustomer(Customer user) {
        cusRepository.save(user);
    }

    public void deleteCustomer(Long id) {
        cusRepository.deleteById(id);
    }



}
