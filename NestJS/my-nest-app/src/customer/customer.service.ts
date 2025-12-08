import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [
        {
            id: 1,
            name: 'Customer 1',
            age: 20,
        },
        {
            id: 2,
            name: 'Customer 2',
            age: 21,
        },
    ];

    getAllCustomers(): Customer[]{
        return this.customers;
    }

    addCustomer(data: CreateCustomerDto): Customer{
        const newCustomer: Customer = {
            id: this.customers.length + 1,
            ...data,
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }
}
