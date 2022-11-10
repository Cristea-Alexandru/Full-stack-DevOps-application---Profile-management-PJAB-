package com.fullstackproject;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TypeRepository typeRepository;
	
	@PostMapping("/users")
	void addUser(@RequestBody User user) {
		userRepository.save(user);
	}
	
	@GetMapping("/users")
	public @ResponseBody Iterable<User> getAllUser() {
		return userRepository.findAll();
	}
	
	@PostMapping("/types")
	void addType(@RequestBody Type type) {
		typeRepository.save(type);
	}
	
	@GetMapping("/types")
	public @ResponseBody Iterable<Type> getAllType() {
		return typeRepository.findAll();
	}
	
	@DeleteMapping("/users/delete_user/{id}")
    public int delete_user(@PathVariable("id") int id) {
        userRepository.deleteById(id);
        return 1;
    }
	
	@DeleteMapping("/types/delete_type/{id}")
    public int delete_type(@PathVariable("id") int id) {
        typeRepository.deleteById(id);
        return 1;
    }
}
