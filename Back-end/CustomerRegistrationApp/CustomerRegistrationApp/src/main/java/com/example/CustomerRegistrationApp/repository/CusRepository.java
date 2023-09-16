package com.example.CustomerRegistrationApp.repository;

import com.example.CustomerRegistrationApp.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CusRepository extends JpaRepository<Customer, Long> {

}
