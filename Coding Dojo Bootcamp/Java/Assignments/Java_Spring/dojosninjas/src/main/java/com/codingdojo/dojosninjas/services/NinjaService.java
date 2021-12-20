package com.codingdojo.dojosninjas.services;

import org.springframework.stereotype.Service;

import com.codingdojo.dojosninjas.models.Ninja;
import com.codingdojo.dojosninjas.repositories.NinjaRepo;

@Service
public class NinjaService {
	
	private final NinjaRepo ninjaRepo;
	public NinjaService(NinjaRepo ninjaRepo) {
		this.ninjaRepo = ninjaRepo;
	}
	
	
	public Ninja createNinja(Ninja ninja) {
		return ninjaRepo.save(ninja);
	}
}
