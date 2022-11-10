import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = new Array;
  message: String = "";
  name!: string;
  closeResult!: string;
  userIndex!: number;

  constructor(private _userService: UserServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this._userService.findAll().subscribe(data => {
      this.users = data
    })
  }

  remove(i: number) {
    this._userService.delete_user_by_id(parseInt(this.users[i].id)).subscribe(resp => {
        this.message = "User deleted successfully";
        this.users.splice(i,1);
    })
  }

  open(content: any, i:number) {
    this.userIndex = i;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}