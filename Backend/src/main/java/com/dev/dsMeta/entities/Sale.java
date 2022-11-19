package com.dev.dsMeta.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "TB_SALES")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="SELLER_NAME")
    private String sellerName;

    @Column(name = "VISITED")
    private Integer visited;

    @Column(name = "DEALS")
    private Integer deals;

    @Column(name = "AMOUNT")
    private Double amount;

    @Column(name = "DATE")
    private LocalDate date;

}
