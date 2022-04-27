import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products: any[]= [];

  	constructor(private messageService: MessageService, private http: HttpClient) {
		this.loadProducts();
	}


	loadProducts(){
		this.http.get('https://dummyjson.com/products?limit=10&skip=10').subscribe((response:any)=>{
			console.log(response)
			this.products = response.products;
		});

	}

	deleteProduct(param: any){
		this.http.delete('https://dummyjson.com/products/'+ param).subscribe((response:any)=>{
			const index = this.products.findIndex((product)=> {
				return product.id === param
			})
			this.products.splice(index,1);
		})
	}

	ngOnInit(): void {
	}

  	presentToast() {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }
}
