class User < ApplicationRecord
  has_secure_password

  has_many :trips

  validates :name,  :email_address, presence: true
  validates :email_address, uniqueness: true
  validates :email_address, email: true
end