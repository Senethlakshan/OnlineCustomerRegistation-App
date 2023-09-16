package com.example.CustomerRegistrationApp.repository;

import com.example.CustomerRegistrationApp.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CusRepository extends JpaRepository<Customer, Long> {

    Optional<Customer> findByNicNumber(String nicNumber);
}
