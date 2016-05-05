class MainController < ApplicationController
  	def index

  	end
  	def showallrsvps
  		@rsvps = Rsvp.all
  		puts @rsvps.inspect
  	end
end
