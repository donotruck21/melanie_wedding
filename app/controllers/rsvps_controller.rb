class RsvpsController < ApplicationController

	def create
		puts params
		puts params[:rsvp][:name]

  		rsvp = Rsvp.create(name:params[:rsvp][:name], email:params[:rsvp][:email], song:params[:rsvp][:song], guest1:params[:rsvp][:guest1], guest2:params[:rsvp][:guest2], guest3:params[:rsvp][:guest3])

  		puts rsvp.errors.full_messages

  		if rsvp.errors.full_messages.empty?
  			flash[:message] = ["RSVP Submitted! Thank you!"]

  			render :json => {
  				color: "green",
  				message: flash[:message]
  			}

  		else
  			flash[:message] = rsvp.errors.full_messages
  			render :json => {
  				color: "red",
  				message: flash[:message]
  			}
  		end
  	end
end
