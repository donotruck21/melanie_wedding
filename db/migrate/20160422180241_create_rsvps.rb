class CreateRsvps < ActiveRecord::Migration
  def change
    create_table :rsvps do |t|
      t.string :name
      t.string :email
      t.string :song
      t.string :guest1
      t.string :guest2
      t.string :guest3

      t.timestamps
    end
  end
end
