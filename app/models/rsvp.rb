class Rsvp < ActiveRecord::Base

	EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i

	validates :name, :email, :song, 
		presence: true

	validates :email,
		uniqueness: { case_sensitive: false }, 
		format: { with: EMAIL_REGEX }
end
